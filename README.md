# Bitcoin Reputation System

## Overview

**Trust is the currency of collaboration.**  
This project introduces a **Bitcoin-compatible reputation system**, designed to work alongside the Lightning Network. It aims to bring trust scores, staking incentives, and verifiable audit trails into the world of decentralized payments — starting with a fully functional reputation core.

**Note:** Due to time constraints, the **frontend and backend are currently developed as separate modules** and are **not yet fully integrated**. However, both are operational independently and designed to fit together seamlessly in future versions.

---

## Features

- **Trust Staking System**: Users can stake trust in others. These votes determine reputation scores.
- **Reputation Decay**: Trust degrades over time, preventing stale or inactive reputations from dominating.
- **Audit Logging**: All actions (trust stakes, decays, and revocations) are recorded in real-time for transparency.
- **Frontend Dashboard**: A sleek, interactive UI to view profiles, stake trust, and explore the network.
- **Modular Backend**: Built with Express and SQLite. Structured for easy integration with LNbits and Bitcoin scripts.
- **Integration-Ready Design**: Designed to support Bitcoin and Lightning transactions via APIs or PSBTs.

---


---

## How It Works

1. **Stake Trust**  
   Users express trust in others by staking a score. These scores are stored and influence reputation.

2. **Reputation Scores**  
   Scores are computed dynamically and decay over time — ensuring relevance and discouraging sybil attacks.

3. **Audit Logs**  
   Every trust action is written to a live log for review, moderation, or dispute resolution.

4. **Frontend Dashboard**  
   Visualizes network trust, recent actions, and user profiles in a minimalist dark-mode UI.

---

## Tech Stack

### Backend
- **Node.js**, **Express**, **SQLite3**
- Environment configuration via `.env`
- Modular service and logging layers

### Frontend
- **React + TailwindCSS**
- Pages: Dashboard, Trust Staking, Reputation, Audit Logs
- Responsive, clean design for quick visual insights

---

## Integration Status

- The frontend and backend are currently **not fully wired together**.
- They are built as **independent modules** that will be integrated post-hackathon.
- This separation allows modular development and clear API boundaries.

---

## Lightning + Bitcoin Integration (In Progress)

While this version does not yet use real Bitcoin or Lightning transactions, the system is **designed for integration**, especially with:
- **LNbits APIs** (as a programmable Lightning layer)
- **Bitcoin scripts or OP_RETURN** (for proof anchoring or trust score snapshots)
- **PSBT flow** (for off-chain + on-chain signaling in the future)

We chose to focus first on **core logic, UX, and auditability** before diving into financial integrations. The modular backend and clear interfaces make it easy to plug in Lightning functionality next.

---

## Future Work

- Full integration of frontend with backend APIs
- Complete Lightning integration using LNbits
- Use Bitcoin OP_RETURN for on-chain trust proof
- Identity linking (optional pubkey verification)
- Trust clustering and community score graphs
- Spam and sybil attack protection mechanisms

---

## License

MIT

---

## Authors
Himani Chandra

Made with so much love for the [MIT Bitcoin Hackathon: Freedom Tech 2025].
