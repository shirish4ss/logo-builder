# Deployment Guide for LogoAI

This guide explains how to push LogoAI to a live server.

## 1. Prerequisites
- A GitHub account.
- A Vercel account (recommended) or any Next.js compatible hosting.
- A PostgreSQL database (e.g., from Neon.tech, Supabase, or Railway) if you want to use a remote DB. By default, this project uses SQLite for local development.

## 2. Environment Variables
You must set the following environment variables in your hosting provider's dashboard:

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Your production database connection string. |
| `NEXTAUTH_SECRET` | A random string for session encryption. |
| `NEXTAUTH_URL` | Your production URL (e.g., `https://your-app.vercel.app`). |
| `OPENROUTER_API_KEY` | API key from [OpenRouter](https://openrouter.ai). |
| `GOOGLE_AI_API_KEY` | API key from Google AI Studio (Gemini). |
| `RAZORPAY_KEY_ID` | Your Razorpay API Key ID. |
| `RAZORPAY_KEY_SECRET` | Your Razorpay API Key Secret. |
| `STRIPE_SECRET_KEY` | Your Stripe Secret Key. |

## 3. Deployment Steps (Vercel)
1. **Push to GitHub**: Initialize a git repo and push your code to a GitHub repository.
2. **Import to Vercel**:
   - Login to Vercel and click "Add New" -> "Project".
   - Select your GitHub repository.
3. **Configure Build Settings**:
   - Framework Preset: Next.js.
   - Root Directory: `./`.
   - Build Command: `prisma generate && next build`.
4. **Add Environment Variables**: Copy and paste the variables from your local `.env` (excluding `DATABASE_URL` if you are using a production DB).
5. **Deploy**: Click "Deploy".

## 4. Database Setup
If you are switching from SQLite to PostgreSQL for production:
1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Run `npx prisma db push` to sync the schema to your production database.

## 5. Payment Setup
- **Razorpay**: Create an account at [Razorpay](https://razorpay.com) and get your test/live keys.
- **Stripe**: Create an account at [Stripe](https://stripe.com) and get your secret and publishable keys.

## 6. AI Models
The app uses `google/gemini-flash-1.5-exp` via OpenRouter. Ensure your OpenRouter account has credits or a valid free tier setup.
