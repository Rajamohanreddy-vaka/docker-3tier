# Containerized 3-Tier Task Management Application

A production-ready, fully containerized 3-tier web application. This architecture leverages microservices isolation, persistent storage volumes, and custom network bridging for local development and testing environments.

---

## Architecture Breakdown

The infrastructure consists of three isolated services communicating over a custom bridge network named `test`:

| Component | Technology | Network Exposure | Role |
| :--- | :--- | :--- | :--- |
| **Frontend** | Nginx / HTML5 / Vanilla JS | Port `80:80` (Public) | Serves the UI and routes traffic via custom endpoints. |
| **Backend** | Node.js (v20 Alpine) / Express | Port `5000` (Internal) | Handles CRUD REST API logic and Mongoose DB interactions. |
| **Database** | MongoDB | Port `27017` (Internal) | State persistence engine backed by named Docker volumes. |

---

## Prerequisites

Before spinning up the stack, ensure your local workstation has Docker installed and running:
* **Docker Engine** (v20.10.0 or higher)
* **Docker Compose v2**

You can verify your local installation by running:
```bash
docker --version
docker compose version
```
---

## Testing the Application
