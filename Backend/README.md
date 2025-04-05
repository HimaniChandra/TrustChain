# TrustChain Backend

This is the **backend API** for the Bitcoin Reputation System, built with **Node.js**, **Express**, and **SQLite3**. It handles all core logic around staking trust, computing reputation, decay mechanisms, and audit logging.

---

## ⚙️ Features

- Stake-based trust reputation system
- Real-time reputation scoring
- Automatic and manual decay logic
- Full audit logging (`logs/auditlog.txt`)
- Future-ready for Bitcoin & Lightning integration

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **SQLite3**
- **dotenv**
- **fs** (for log management)

---

## 📁 Folder Layout

```
backend/
├── service.js         # Main API entry point
├── database.js        # DB setup + logic
├── auditlog.js        # Real-time logging
├── logs/
│   └── auditlog.txt   # Stores all actions
├── .env               # Config file
└── README.md          # You are here!
```

---

## ✅ How to Run the Backend

### 📍 Step-by-step Setup

1. **Navigate into backend folder**

```bash
cd backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```bash
touch .env
```

Paste the following into `.env`:

```
DB_PATH=./reputation.db
```

4. **Start the backend server**

```bash
node service.js
```

You should see:
```
Server started on http://localhost:3000
```

---

## 🔌 API Endpoints

| Route                 | Method | Description                          |
|----------------------|--------|--------------------------------------|
| `/stake`             | POST   | Stake trust between users            |
| `/reputation/:user`  | GET    | Get reputation score for user        |
| `/audit-log`         | GET    | View all audit logs                  |
| `/decay`             | POST   | Trigger decay manually (dev only)    |

---

## 🧪 Example API Call (via cURL)

```bash
curl -X POST http://localhost:3000/stake \
-H "Content-Type: application/json" \
-d '{"from": "alice", "to": "bob", "amount": 20}'
```

---

## 📝 Notes

- All logs go to `logs/auditlog.txt`
- Staking and decay events are recorded
- Bitcoin & Lightning integration will come next
- Frontend and backend are **not yet connected** in this version

---

## 📄 License

MIT
