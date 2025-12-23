# React Clean Architecture – Redux Toolkit Starter

Enterprise-grade **React 18 + TypeScript** application built with **Clean Architecture**, **Redux Toolkit**, **Auth**, **Axios Interceptors**, and **Lazy Loading**.

This project is a **React equivalent** of an Angular NgRx Standalone Clean Architecture application.

---

## 🚀 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Redux Toolkit**
- **React Router v6**
- **Axios**
- **Clean Architecture (Feature-based)**

---

## 🧱 Architecture Overview

The project follows a **layered, feature-first Clean Architecture** approach:

```
src/
│
├── app/                # App bootstrap, store, router
├── core/               # Domain models, hooks, guards, routes
├── infrastructure/     # API clients, auth, interceptors
├── features/           # Business features (auth, vehicles, etc.)
│   ├── auth/
│   ├── vehicles/
│   └── ...
├── shared/              # Layouts, reusable UI components
└── index.css
```

### Why this architecture?
- Scales to large teams
- Clear separation of concerns
- Easy testing and refactoring
- Mirrors enterprise Angular architecture patterns

---

## 🔐 Authentication (Dummy Login)

This app includes a **mock authentication system** (no backend required).

### Test Credentials

| Role    | Email              | Password |
|-------- |------------------- |--------- |
| Admin   | admin@fleet.com    | admin    |
| Manager| manager@fleet.com  | manager  |

### Auth Features
- Mock login with delay (API simulation)
- JWT-like token stored in `localStorage`
- Redux-based auth state
- Route guards (protected routes)
- Logout support

---

## 🔁 Axios Interceptors

Axios is configured with:
- Authorization header injection
- Global `401 Unauthorized` handling
- Centralized HTTP client

File:
```
src/infrastructure/api/httpClient.ts
```

---

## 🧭 Routing & Lazy Loading

- Public routes (`/auth/login`)
- Protected routes (`/`)
- Feature-based lazy loading using `React.lazy()`
- Auth guard using Redux state

---

## ▶️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

### 3️⃣ Open in browser

```
http://localhost:5173
```

---

## 🧪 What You’ll See

1. Login page
2. After login → Dashboard layout
3. Vehicles feature (mock data)
4. Logout clears token and redirects to login

---

## 📦 Environment Variables (Optional)

Create a `.env` file:

```env
VITE_API_BASE_URL=https://api.example.com
```

Accessible via:

```ts
import.meta.env.VITE_API_BASE_URL
```

---

## 🏗️ Ideal For

- Angular → React migration
- Enterprise React architecture reference
- Redux Toolkit best practices
- Clean Architecture frontend design
- Interview / portfolio showcase

---

## 🧠 Key Concepts Demonstrated

- Feature-based folder structure
- Redux Toolkit slices & thunks
- Auth state management
- Protected routing
- Type-safe React with TypeScript

---

## 📌 Suggested Repository Name

```
react-clean-architecture-redux-toolkit
```

---

## 📄 License

MIT – free to use, modify, and learn from.

---

### ✨ Author Note

This project is intentionally designed to reflect **real-world enterprise frontend architecture**, not a simple demo.

If you’re coming from Angular + NgRx, this will feel very familiar — just cleaner and lighter.