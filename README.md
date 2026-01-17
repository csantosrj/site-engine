# site-engine

A minimal **Server-Side Rendering (SSR) engine** built with **Node.js**, designed to power secure, SEO-friendly, content-driven websites without heavy frontend frameworks.

This project was created as a personal foundation to run my own websites with full control over rendering, security, and deployment, while keeping the browser as simple as possible.

---

## ✨ Why site-engine?

Modern frontend stacks often introduce unnecessary complexity, large dependency trees, and increased attack surface — especially for content-oriented websites.

**site-engine** was created with a different mindset:

- ✅ Render HTML on the server
- ✅ Deliver only **HTML, CSS, and JavaScript** to the browser
- ✅ Keep backend logic fully isolated
- ✅ Be SEO-first by default
- ✅ Avoid SPA-heavy architectures when they are not needed
- ✅ Stay simple, predictable, and secure

This engine provides everything needed for:
- Blogs
- Content websites
- Educational platforms
- SEO-focused projects
- Simple SPA-like interactions with SSR

---

## 🧠 Core Principles

- **SSR First** – Pages are rendered on the server
- **Security by Isolation** – Backend logic is never exposed to the browser
- **Minimal JavaScript** – Only small, intentional scripts for UI behavior
- **Atomic Design** – Reusable, predictable UI components
- **Project Clonable** – Intended to be cloned per site, not shared as a package
- **Container Friendly** – Each site runs in its own container and reverse proxy

---

## 🏗️ Project Structure

The project is organized to clearly separate rendering, application logic, and static assets.
```
site-engine/
├─ server/                 # Private application logic (not exposed to the browser)
│  ├─ server.js            # Express bootstrap and SSR setup
│  ├─ routes/              # HTTP routes (GET/POST)
│  ├─ controllers/         # Request handlers (orchestration only)
│  ├─ services/            # Business logic (in-memory mock, DB later)
│  └─ models/              # Domain models
│
├─ views/                  # Server-side rendered templates (EJS)
│  ├─ layout/              # Base layouts
│  ├─ pages/               # Page compositions
│  └─ components/          # Atomic Design components
│     ├─ atoms/            # Smallest UI elements
│     ├─ molecules/        # Composed UI elements
│     └─ organisms/        # Large UI sections
│
├─ public/                 # Static assets (served directly)
│  ├─ css/                 # Stylesheets (Tailwind or custom)
│  └─ js/                  # Minimal client-side scripts
│
├─ package.json
└─ README.md
```

### Key Points

- **server/**  
  Private application logic (never exposed to the browser)

- **views/**  
  Server-rendered HTML using EJS, organized with Atomic Design

- **public/**  
  Static assets only (CSS and JS)

- **No public API**  
  The browser never talks directly to backend services

---

## 🧩 Rendering Model

- Pages are rendered on the server using EJS
- Components are pure templates (no business logic)
- Forms submit via standard HTTP POST
- UI behavior (modals, interactions) is handled with small vanilla JS scripts

This keeps:
- SEO predictable
- HTML readable
- Debugging simple

---

## 📦 State & Data (Mock)

For demonstration and testing purposes, this project includes:

- An **in-memory mock service**
- No database required
- Data resets on server restart

This allows anyone to:
- Clone the project
- Run it locally
- Test the full SSR + CRUD flow immediately

The mock can later be replaced by:
- File storage
- SQLite
- PostgreSQL
- Any backend system

Without changing the rendering model.

---

## 🚀 Getting Started

### Requirements
- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/site-engine.git
cd site-engine
npm install

### Reun in development

```bash
npm run dev

### Then open

```bash
http://localhost:3000