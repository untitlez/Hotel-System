# 🏝️ Hotel System Project (Next.js App Router + PostgreSQL)

> Modern, fullstack, and scalable web application for luxury accommodation booking in Australia. Built with Next.js App Router 15.3.3 + Prisma ORM + PostgreSQL, featuring secure auth, dynamic booking, and admin dashboard.

---

## ✨ Features

- ⚡ Next.js App Router 15.3.3 – Full support for server & client components, streaming, and layouts
- 🗄️ Prisma ORM + PostgreSQL – Type-safe queries, migrations, and production-ready DB
- ✅ Zod validation – Ensure payload validation for both frontend & backend
- 🎨 Shadcn/UI + TailwindCSS – Accessible and responsive UI components with modern styling
- 🔐 NextAuth.js – Secure authentication and session management
- 📊 Admin Dashboard – Manage rooms, users, and bookings
- 🏨 Booking System – Real-time room availability and booking flow
- 🚀 Vercel Optimized – Serverless-friendly with Prisma Data Proxy and automatic caching
- 🛡️ Error Handling + Logging – Production-grade fallback and structured logging

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/luxury-stay-au.git
cd luxury-stay-au
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create .env file:

env
DATABASE_URL="postgresql://username:password@host:5432/luxury_stay"
NEXTAUTH_SECRET="your-random-secret"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000"
Tip: Use separate DB URLs for Production and Preview in Vercel.

### 4. Setup Database & Prisma
```bash
npx prisma migrate dev
npx prisma generate
```

### 5. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
```plaintext
http://localhost:3000
```

---

## 🧱 Project Structure (Best Practice – App Router)

```plaintext
/app
│
├── (auth)
│   ├── sign-in/page.tsx
│   ├── sign-up/page.tsx
│   └── layout.tsx
│
├── (dashboard)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── booking/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── member/
│   │   └── [id]/page.tsx
│   └── room/
│       ├── page.tsx
│       ├── create-room/page.tsx
│       └── [id]/page.tsx
│
├── (public)
│   ├── layout.tsx
│   ├── page.tsx          # Homepage (Luxury stays overview)
│   ├── property/page.tsx # Explore all rooms
│   ├── booking/[id]/page.tsx
│   └── review/page.tsx
│
├── api
│   ├── auth/[...nextauth]/route.ts
│   ├── booking/route.ts
│   ├── room/
│   │   ├── route.ts
│   │   └── [id]/route.ts
│   ├── users/route.ts
│   └── review/route.ts
│
├── components
│   ├── ui/               # shadcn components
│   ├── booking/
│   ├── dashboard/
│   └── property/
│
├── lib
│   ├── prisma.ts         # Prisma client singleton
│   ├── auth.ts           # NextAuth config
│   ├── validation/
│   │   └── booking.schema.ts
│   └── utils/
│       ├── fetcher.ts
│       └── error-handler.ts
│
├── prisma
│   ├── schema.prisma
│   └── seed.ts
│
├── types
│   ├── booking.ts
│   ├── room.ts
│   └── user.ts
│
├── globals.css
├── layout.tsx
├── loading.tsx
└── page.tsx
```

## 🛠️ Scripts
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "postinstall": "prisma generate",
  "lint": "next lint",
  "vercel-build": "prisma generate && prisma migrate deploy && next build"
}
```

## 🔐 Security & Production Tips
Use Prisma Data Proxy or Accelerate on Vercel to avoid connection limits

Always validate payloads with Zod in API routes

Use try/catch + fallback UI for fetch in Server Components

Setup structured logging (e.g., Sentry or Vercel Logs) for production errors

## 📦 Tech Stack

Frontend: Next.js 15.3.3 App Router, TailwindCSS, Shadcn UI

Backend: Next.js API Routes, Prisma ORM, PostgreSQL

Auth: NextAuth.js (JWT + OAuth)

Validation: Zod

Deployment: Vercel Serverless
