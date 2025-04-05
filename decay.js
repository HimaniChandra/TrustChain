const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db", (err) => {
    if (err) console.error("Database error:", err);
    else console.log("Connected to SQLite database for reputation decay");
});

// Ensure `last_updated` exists
function initializeDecayTable() {
    db.run(`
        ALTER TABLE users ADD COLUMN last_updated INTEGER DEFAULT (strftime('%s', 'now'))
    `, (err) => {
        if (err && !err.message.includes("duplicate column name")) {
            console.error("Error adding last_updated column:", err.message);
        }
    });
}

function applyReputationDecay() {
    const halfLifeDays = 30; 
    const decayFactor = Math.log(2) / halfLifeDays;

    db.run(`
        UPDATE users 
        SET reputation = reputation * EXP(-${decayFactor} * (strftime('%s', 'now') - last_updated) / 86400),
            last_updated = strftime('%s', 'now')
        WHERE reputation > 0
    `, function (err) {
        if (err) {
            console.error("Error applying decay:", err.message);
        } else {
            console.log(`Reputation decay applied to ${this.changes} users`);
        }
    });
}

setInterval(() => {
    console.log("Applying reputation decay...");
    applyReputationDecay();
}, 24 * 60 * 60 * 1000);

module.exports = { applyReputationDecay, initializeDecayTable };
