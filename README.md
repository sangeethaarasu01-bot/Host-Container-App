# Host Container App

This is the **Host application** built with **Next.js** and **Module Federation**.  
It consumes the **Auth App** (remote application) and integrates its authentication components (e.g., Login Page) into the host.  

## 🔗 Micro Frontend Setup

- **Host App**: Loads remote modules using `@module-federation/nextjs-mf`.  
- **Auth App**: Exposed as a remote and provides authentication-related components.  
- When the Auth App is running, the Host App can call and render the **Login Page** directly.  

---

## 🚀 Features
- Next.js 13+ with Webpack 5 Module Federation
- Remote module loading with `@module-federation/nextjs-mf`
- `Auth App` integrated via `remotes` configuration
- Environment variable support (`NEXT_PUBLIC_AUTH_API_URL`)
- Top-level await & Webpack layers enabled
- ✅ **Dynamic Import of Micro-Frontends** – remotes are loaded at runtime from a **config file**, making the setup more flexible and environment-independent

---

## 📦 Installation & Setup

### 1. Clone the Host App
```bash
git clone https://github.com/sangeethaarasu01-bot/Host-Container-App.git

cd Host-Container-App

npm install

npm run dev