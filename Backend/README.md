# Bitcoin Reputation System - Backend

This is the **backend service** for the Bitcoin Reputation System. It exposes a REST API for staking trust, tracking user reputations, recording audit logs, and preparing for integration with the Lightning Network.

---

## Features

- Stake trust points from one user to another
- Fetch current reputation score of a user
- View the audit trail of all transactions
- Data persistence with SQLite3
- Built with Express.js

---

## Setup Instructions

### 1. Navigate to the backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
node index.js
```

Server should now be running at:
```
http://localhost:3000
```

---

## API Endpoints & Try-it Commands

Use the following `curl` commands to test out the backend locally.

### 1. Stake trust (create a trust transaction)
```bash
curl -X POST http://localhost:3000/stake \
-H "Content-Type: application/json" \
-d '{
  "from": "alice",
  "to": "bob",
  "amount": 10
}'
```

### 2. Reduce trust (same as staking negative points)
```bash
curl -X POST http://localhost:3000/stake \
-H "Content-Type: application/json" \
-d '{
  "from": "bob",
  "to": "alice",
  "amount": -5
}'
```

### 3. Get reputation of a user
```bash
curl http://localhost:3000/reputation/alice
```

### 4. Get the full audit log
```bash
curl http://localhost:3000/audit-log
```

---

## Folder Structure (Backend)
```
backend/
├── index.js               # Main backend server file
├── db.sqlite              # Auto-generated SQLite database file
├── package.json           # Backend dependencies and scripts
├── .env                   # Environment variables
```

---

## Notes

- Make sure port `3000` is available.
- This backend **does not require any authentication** yet.
- Future versions will integrate with the Lightning Network for trust payments.

---

## Example Workflow
1. Alice stakes 10 points to Bob.
2. Bob stakes 5 back to Alice.
3. You view Alice's score.
4. You view the audit log to see the trail.

---

## License
MIT

