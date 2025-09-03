# 🏝️ Hotel System Project (Fullstack Next.js App Router + PostgreSQL)

> Modern & scalable web application for luxury accommodation booking in Australia.Built with Next.js App Router 15.3.3, Prisma ORM + PostgreSQL, Zod, Shadcn UI, and Vercel Serverless.

---

## ✨ Features

- ⚡ Next.js App Router 15.3.3 – Full support for server components, streaming, and layouts
- 🗄️ Prisma ORM + PostgreSQL – Type-safe queries, migrations, and production-ready DB
- ✅ Zod validation – End-to-end type safety & payload validation
- 🎨 Shadcn/UI + TailwindCSS – Modern, responsive & accessible UI
- 🔐 NextAuth.js – Secure authentication & session handling (JWT / OAuth ready)
- 🏨 Booking System – Real-time room availability & booking flow
- 📊 Admin Dashboard – Manage users, rooms & bookings efficiently
- 🚀 Vercel Optimized – Serverless-ready with Prisma Data Proxy or Accelerate
- 🛡️ Error Handling & Logging – Production-grade fallback UI + structured logs

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/untitlez/Hotel-System.git
cd Hotel-System
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create .env file:

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"

DATABASE_URL="postgresql://user:password@localhost:5432/hotel_system"

AUTH_SECRET="super-secret-key"

AUTH_GOOGLE_ID="your-google-oauth-client-id"
AUTH_GOOGLE_SECRET="your-google-oauth-client-secret"

CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

> Tip: Use separate DB URLs for Production and Preview in Vercel.

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
root/
│
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── sign-up/page.tsx
│   │
│   ├── (page)/
│   │   ├── page.tsx
│   │   ├── hero/page.tsx
│   │   ├── cta/page.tsx
│   │   ├── fqa/page.tsx
│   │   ├── footer/page.tsx
│   │   ├── popular-location/page.tsx
│   │   ├── property/
│   │   │   ├── page.tsx
│   │   │   └── property-home/page.tsx
│   │   ├── booking/[id]/page.tsx
│   │   ├── profile/page.tsx
│   │   └── review/page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── booking/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── member/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── room/
│   │       ├── page.tsx
│   │       ├── create-room/page.tsx
│   │       └── [id]/page.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts
│   │   │   └── sign-up/route.ts
│   │   ├── booking/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── profile/[id]/route.ts
│   │   ├── review/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── room/
│   │   │   ├── route.ts
│   │   │   ├── admin/route.ts
│   │   │   ├── member/route.ts
│   │   │   └── [id]/route.ts
│   │   ├── upload/route.ts
│   │   └── users/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── auth/
│   ├── dashboard/
│   │   ├── layout/
│   │   ├── booking/
│   │   ├── member/
│   │   └── room/
│   └── pages/
│       ├── booking/
│       ├── hero/
│       ├── profile/
│       ├── property/
│       └── review/
│
├── hooks/
│   └── use-mobile.ts
│
├── lib/
│   ├── auth.ts
│   ├── cloudinary.ts
│   ├── config.ts
│   ├── endpoints.ts
│   ├── prisma.ts
│   ├── routes.ts
│   ├── utils.ts
│   └── store/
│       └── site.ts
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   ├── favicon/
│   ├── QR.webp
│   └── shiba.jpg
│
├── services/
│   ├── booking.services.ts
│   ├── login.services.ts
│   ├── profile.services.ts
│   ├── review.services.ts
│   ├── room.services.ts
│   ├── sign-up.services.ts
│   ├── upload.services.ts
│   └── user.services.ts
│
├── validators/
│   ├── booking.validator.ts
│   ├── login.validator.ts
│   ├── profile.validator.ts
│   ├── query.validator.ts
│   ├── review.validator.ts
│   ├── room.validator.ts
│   ├── session.validator.ts
│   ├── sign-up.validator.ts
│   └── user.validator.ts
│
├── .env.example
├── middleware.ts
└── package.json

```

## 🛠️ Scripts

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "postinstall": "prisma generate"
}
```

## 🔐 Security & Production Tips

```plaintext
- Use Prisma Data Proxy or Accelerate on Vercel to avoid connection limits
- Always validate API payloads with Zod
- Wrap all server fetches with try/catch and provide fallback UI
- Setup structured logging (Sentry or Vercel Logs) for production error tracking
```

## 📦 Tech Stack

```plaintext
- Frontend: Next.js 15.3.3 App Router, TailwindCSS, Shadcn UI
- Backend: Next.js API Routes, Prisma ORM, PostgreSQL
- Auth: NextAuth.js (JWT & OAuth)
- Validation: Zod
- Deployment: Vercel (Serverless)
```

---
