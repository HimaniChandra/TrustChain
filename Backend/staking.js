const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

// Database setup for staking (uses the same database file)
const db = new sqlite3.Database("./database.db", (err) => {
    if (err) console.error("Database error:", err);
    else console.log("Connected to SQLite database for staking");
});

// Create stakes table
db.run(`
    CREATE TABLE IF NOT EXISTS stakes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        payer TEXT,
        receiver TEXT,
        amount REAL,
        stake REAL,
        transaction_id TEXT UNIQUE,
        status TEXT DEFAULT 'pending'
    )
`);

// Place a Stake
router.post("/stake", (req, res) => {
    const { payer, receiver, amount, stake, transaction_id } = req.body;
    if (!payer || !receiver || !amount || !stake || !transaction_id) {
        return res.status(400).json({ error: "Payer, receiver, amount, stake, and transaction ID are required" });
    }
    db.run(
        `INSERT INTO stakes (payer, receiver, amount, stake, transaction_id, status) VALUES (?, ?, ?, ?, ?, 'pending')`,
        [payer, receiver, amount, stake, transaction_id],
        function (err) {
            if (err) {
                return res.status(400).json({ error: "Duplicate transaction ID or database error", details: err.message });
            }
            res.json({ message: "Stake placed successfully", transaction_id });
        }
    );
});

// Complete a transaction (stake is returned to payer)
router.post("/complete", (req, res) => {
    const { transaction_id } = req.body;
    if (!transaction_id) {
        return res.status(400).json({ error: "Transaction ID is required" });
    }
    db.run(
        `UPDATE stakes SET status = 'completed' WHERE transaction_id = ? AND status = 'pending'`,
        [transaction_id],
        function (err) {
            if (err || this.changes === 0) {
                return res.status(400).json({ error: "Transaction not found or already processed" });
            }
            res.json({ message: "Transaction completed successfully", transaction_id });
        }
    );
});

// Fail a transaction (stake is given to receiver)
router.post("/fail", (req, res) => {
    const { transaction_id } = req.body;
    if (!transaction_id) {
        return res.status(400).json({ error: "Transaction ID is required" });
    }
    db.run(
        `UPDATE stakes SET status = 'refunded' WHERE transaction_id = ? AND status = 'pending'`,
        [transaction_id],
        function (err) {
            if (err || this.changes === 0) {
                return res.status(400).json({ error: "Transaction not found or already processed" });
            }
            res.json({ message: "Stake refunded to receiver due to transaction failure", transaction_id });
        }
    );
});

router.post("/payout", (req, res) => {
    const { transaction_id } = req.body;
    db.get("SELECT * FROM stakes WHERE transaction_id = ?", [transaction_id], (err, stake) => {
        if (err || !stake) {
            return res.status(400).json({ error: "Stake not found" });
        }
        if (stake.status !== "pending") {
            return res.status(400).json({ error: "Stake already processed" });
        }
        
        db.run("UPDATE stakes SET status = 'completed' WHERE transaction_id = ?", [transaction_id], (err) => {
            if (err) {
                return res.status(500).json({ error: "Database error", details: err.message });
            }
            res.json({ message: "Payout successful", transaction_id });
        });
    });
});

// Get all stakes (for debugging or display)
router.get("/", (req, res) => {
    db.all("SELECT * FROM stakes", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Database error", details: err.message });
        }
        res.json(rows);
    });
});

module.exports = router;
