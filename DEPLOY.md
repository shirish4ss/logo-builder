# Deployment Guide: LogoAI

This guide provides step-by-step instructions for deploying LogoAI to a live production environment.

## 1. Prerequisites
- A **PostgreSQL** database (e.g., Supabase, Neon, or RDS).
- An **OpenRouter** or **Google Gemini** API key for AI features.
- A **Razorpay** and/or **Stripe** account for payments.
- Node.js 18+ installed on the server.

## 2. Environment Variables
Create a `.env` file in your production environment with the following:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/dbname?sslmode=require"

# Auth
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-super-secret-key"

# AI
OPENROUTER_API_KEY="your-key"
GOOGLE_GEMINI_API_KEY="your-key"

# Payments
RAZORPAY_KEY_ID="rzp_live_..."
RAZORPAY_KEY_SECRET="your-secret"
STRIPE_SECRET_KEY="sk_live_..."
```

## 3. Build & Deployment Steps

### Option A: Vercel (Recommended)
1. Push your code to a GitHub/GitLab repository.
2. Import the project in Vercel.
3. Add the Environment Variables in the Vercel Dashboard.
4. Vercel will automatically detect Next.js and deploy.

### Option B: Self-Hosted (VPS / Ubuntu)
1. **Clone & Install:**
   ```bash
   git clone <your-repo-url>
   cd logo-ai
   npm install
   ```
2. **Database Migration:**
   ```bash
   npx prisma migrate deploy
   ```
3. **Build:**
   ```bash
   npm run build
   ```
4. **Run with PM2:**
   ```bash
   pm2 start npm --name "logoai" -- start
   ```

## 4. Post-Deployment Checklist
- [ ] Verify SSL (HTTPS) is active.
- [ ] Test the "Join Free" flow and database persistence.
- [ ] Run a test transaction in Razorpay/Stripe (Sandbox mode first).
- [ ] Verify AI logo generation prompts are reaching the API.

## 5. Support & Maintenance
- **Logs:** Use `pm2 logs logoai` or Vercel Runtime Logs.
- **Admin Access:** Manually update your user role to `ADMIN` in the database to access `/admin/dashboard`.
