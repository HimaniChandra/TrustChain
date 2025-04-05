// auditLog.js

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'audit.log');

// Function to write an audit log entry
function logAction(action, data) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ACTION: ${action} | DATA: ${JSON.stringify(data)}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Failed to write to audit log:', err);
        }
    });
}

module.exports = {
    logAction
};
