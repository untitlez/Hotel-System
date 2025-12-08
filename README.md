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
app/
 ├─ (auth)/
 │   ├─ login/page.tsx
 │   └─ sign-up/page.tsx
 │
 ├─ (page)/
 │   ├─ booking/[id]/page.tsx
 │   ├─ cta/page.tsx
 │   ├─ footer/page.tsx
 │   ├─ fqa/page.tsx
 │   ├─ hero/page.tsx
 │   ├─ popular-location/page.tsx
 │   ├─ profile/page.tsx
 │   ├─ property/
 │   │   ├─ property-home/page.tsx
 │   │   └─ page.tsx
 │   └─ review/page.tsx
 │
 ├─ api/
 │   ├─ auth/
 │   │   ├─ [...nextauth]/route.ts
 │   │   └─ sign-up/route.ts
 │   ├─ booking/
 │   │   ├─ [id]/route.ts
 │   │   └─ route.ts
 │   ├─ profile/[id]/route.ts
 │   ├─ review/
 │   │   ├─ [id]/route.ts
 │   │   └─ route.ts
 │   ├─ room/
 │   │   ├─ [id]/route.ts
 │   │   ├─ admin/route.ts
 │   │   ├─ member/route.ts
 │   │   └─ route.ts
 │   ├─ upload/route.ts
 │   └─ users/
 │       ├─ [id]/route.ts
 │       └─ route.ts
 │
 ├─ dashboard/
 │   ├─ booking/
 │   │   ├─ [id]/page.tsx
 │   │   └─ page.tsx
 │   ├─ member/
 │   │   ├─ [id]/page.tsx
 │   │   └─ page.tsx
 │   ├─ room/
 │   │   ├─ [id]/page.tsx
 │   │   ├─ create-room/page.tsx
 │   │   └─ page.tsx
 │   ├─ layout.tsx
 │   └─ page.tsx
 │
 ├─ error.tsx
 ├─ globals.css
 ├─ layout.tsx
 ├─ loading.tsx
 ├─ not-found.tsx
 └─ page.tsx

components/
 ├─ auth/
 │   ├─ login-form.tsx
 │   └─ sign-up-form.tsx
 │
 ├─ dashboard/
 │   ├─ booking/
 │   │   ├─ booking-table-info.tsx
 │   │   └─ booking-table.tsx
 │   ├─ chart/
 │   │   ├─ total-bookings-location.tsx
 │   │   ├─ total-bookings-price.tsx
 │   │   ├─ total-bookings-type.tsx
 │   │   └─ total-data.tsx
 │   ├─ layout/
 │   │   ├─ sidebar-menu-dashboard.tsx
 │   │   └─ sitebar-content-header.tsx
 │   ├─ member/
 │   │   ├─ member-card-info.tsx
 │   │   ├─ member-table-info.tsx
 │   │   └─ member-table.tsx
 │   └─ room/
 │       ├─ app-room-form.tsx
 │       ├─ room-form-checkbox.tsx
 │       ├─ room-form-file.tsx
 │       ├─ room-form-input.tsx
 │       ├─ room-form-select.tsx
 │       ├─ room-form-submit.tsx
 │       ├─ room-table-popover.tsx
 │       └─ room-table.tsx
 │
 ├─ pages/
 │   ├─ booking/
 │   │   ├─ app-booking-form.tsx
 │   │   ├─ booking-back.tsx
 │   │   ├─ booking-card-info.tsx
 │   │   ├─ booking-confirm.tsx
 │   │   ├─ booking-payment.tsx
 │   │   ├─ booking-request.tsx
 │   │   ├─ booking-summary.tsx
 │   │   ├─ booking-warning.tsx
 │   │   └─ count-down.tsx
 │   ├─ hero/search-box.tsx
 │   ├─ profile/
 │   │   ├─ app-sidebar-profile.tsx
 │   │   ├─ profile-bookings-list.tsx
 │   │   ├─ profile-edit-button.tsx
 │   │   └─ profile-sidebar-menu.tsx
 │   ├─ property/
 │   │   ├─ app-card-property.tsx
 │   │   ├─ property-amenity-card.tsx
 │   │   ├─ property-card-image.tsx
 │   │   ├─ property-card-info.tsx
 │   │   ├─ property-next-page.tsx
 │   │   └─ property-sort.tsx
 │   └─ review/
 │       ├─ app-review-form.tsx
 │       ├─ review-box.tsx
 │       ├─ review-form-input.tsx
 │       ├─ review-form-submit.tsx
 │       └─ review-form-textarea.tsx
 │
 ├─ ui/
 ├─ back-to-top-button.tsx
 ├─ delete-button.tsx
 ├─ navbar.tsx
 ├─ sidebar-account.tsx
 ├─ sidebar-breadcrumb.tsx
 └─ theme-provider.tsx

hooks/
 └─ use-mobile.ts

lib/
 ├─ auth.ts
 ├─ cloudinary.ts
 ├─ config.ts
 ├─ endpoints.ts
 ├─ prisma.ts
 ├─ routes.ts
 └─ utils.ts

prisma/

services/
 ├─ booking.services.ts
 ├─ login.services.ts
 ├─ profile.services.ts
 ├─ review.services.ts
 ├─ room.services.ts
 ├─ sign-up.services.ts
 └─ user.services.ts

validators/
 ├─ booking.validator.ts
 ├─ login.validator.ts
 ├─ profile.validator.ts
 ├─ query.validator.ts
 ├─ review.validator.ts
 ├─ room.validator.ts
 ├─ session.validator.ts
 ├─ sign-up.validator.ts
 └─ user.validator.ts

.env
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
