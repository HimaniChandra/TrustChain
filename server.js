require("dotenv").config();
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const stakingRoutes = require("./staking"); // Import staking routes
const { applyReputationDecay, initializeDecayTable } = require("./decay");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/staking", stakingRoutes); // Mount staking routes at /staking

// Database setup
const db = new sqlite3.Database("./database.db", (err) => {
    if (err) console.error("Database error:", err);
    else console.log("Connected to SQLite database");
});

// Create users table
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        reputation REAL DEFAULT 0,
        stake_amount REAL DEFAULT 0,
        last_updated INTEGER DEFAULT (strftime('%s', 'now'))
    )
`);

// Create trust_votes table
db.run(`
    CREATE TABLE IF NOT EXISTS trust_votes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        from_user TEXT,
        to_user TEXT,
        trust INTEGER, -- 1 for trust, -1 for distrust
        UNIQUE(from_user, to_user)  -- Prevents duplicate votes
    )
`);

// Test API
app.get("/", (req, res) => {
    res.send("Bitcoin Reputation System API is running!");
});

// Register a new user
app.post("/register", (req, res) => {
    const { username, stake_amount } = req.body;
    if (!username || stake_amount === undefined) {
        return res.status(400).json({ error: "Username and stake amount are required" });
    }
    db.run(
        `INSERT INTO users (username, stake_amount, last_updated) VALUES (?, ?, strftime('%s', 'now'))`,
        [username, stake_amount],
        function (err) {
            if (err) {
                return res.status(400).json({ error: "Username already exists" });
            }
            res.json({ message: "User registered successfully", id: this.lastID });
        }
    );
});

// Get all users
app.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Trust or report a user
app.post("/trust", (req, res) => {
    const { from_user, to_user, trust } = req.body;
    if (!from_user || !to_user || trust === undefined) {
        return res.status(400).json({ error: "Both users and trust value are required" });
    }
    const trustValue = trust ? 1 : -1;
    db.run(
        `INSERT INTO trust_votes (from_user, to_user, trust) 
         VALUES (?, ?, ?) 
         ON CONFLICT(from_user, to_user) 
         DO UPDATE SET trust = excluded.trust`,
        [from_user, to_user, trustValue],
        function (err) {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }
            db.get(
                `SELECT SUM(trust) AS reputation FROM trust_votes WHERE to_user = ?`,
                [to_user],
                (err, row) => {
                    if (err) {
                        return res.status(500).json({ error: "Failed to recalculate reputation" });
                    }
                    const newReputation = row.reputation || 0;
                    db.run(
                        `UPDATE users SET reputation = ?, last_updated = strftime('%s', 'now') WHERE username = ?`,
                        [newReputation, to_user],
                        function (err) {
                            if (err) {
                                return res.status(500).json({ error: "Failed to update reputation" });
                            }
                            res.json({ message: `Reputation updated for ${to_user}`, reputation: newReputation });
                        }
                    );
                }
            );
        }
    );
});

// Get a user's reputation
app.get("/reputation/:user", (req, res) => {
    const { user } = req.params;
    db.get(
        `SELECT reputation FROM users WHERE username = ?`,
        [user],
        (err, row) => {
            if (err) {
                console.error("Error fetching reputation:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
            res.json({ user, reputation: row?.reputation || 0 });
        }
    );
});

// Initialize decay system
initializeDecayTable();
applyReputationDecay();

app.post('/decay', (req, res) => {
    applyReputationDecay();
    res.json({ message: 'Reputation decay triggered manually' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


