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