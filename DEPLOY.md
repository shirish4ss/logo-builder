# Deployment Guide for LogoAI

This guide provides instructions on how to push the LogoAI tool to a live server.

## 1. Prerequisites
- A Vercel or AWS account.
- A Google Gemini API Key or OpenRouter API Key.
- Razorpay and Stripe API keys (for live payments).
- A managed SQLite (e.g., Turso) or Postgres database (if migrating from SQLite).

## 2. Environment Variables
Ensure the following variables are set in your production environment. Failure to set these correctly will result in runtime errors.

```env
# Database connection string
# For production, use a hosted database like Turso (SQLite) or Supabase (Postgres)
DATABASE_URL="your-production-db-url"

# NextAuth configuration
NEXTAUTH_SECRET="a-long-random-string"
NEXTAUTH_URL="https://yourdomain.com"

# AI API Keys
GOOGLE_GEMINI_API_KEY="your-gemini-key"
OPENROUTER_API_KEY="your-openrouter-key"

# Payment Gateways (Live Keys)
RAZORPAY_KEY_ID="your-razorpay-id"
STRIPE_SECRET_KEY="your-stripe-secret"
```

### Important: Database Setup
The current project uses SQLite. While this works on Vercel with a local file, it is **volatile** (data is lost on every redeploy).
For a production app, we highly recommend:
1. **Turso:** A distributed SQLite database that works perfectly with this project.
2. **Postgres:** If you switch to Postgres, update `provider = "sqlite"` to `provider = "postgresql"` in `prisma/schema.prisma` and run `npx prisma migrate dev`.

## 3. Deploying to Vercel (Recommended)
Vercel is the easiest platform for Next.js applications.
1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Configure the Environment Variables in the Vercel dashboard.
4. **Post-Deployment Migration:** If you are using a hosted database, run `npx prisma migrate deploy` in your local terminal (connected to the production DB) or as part of a custom CI/CD pipeline to ensure the schema is up to date.
5. **Crucial:** Ensure the build command is set to `npx prisma generate && next build`. This is already configured in `package.json`, but verify it in the Vercel Settings > Build & Development settings.
6. Deploy!

### Common Troubleshooting
- **"Environment variable not found: DATABASE_URL":** Double-check that you've added the variable in the Vercel project settings and **redeployed** the application.
- **Prisma Client not found:** Ensure `npx prisma generate` is part of your build script.

## 4. Deploying to AWS (EC2/Amplify)
For a more custom setup on AWS:
1. Use **AWS Amplify** for automatic Next.js deployment (similar to Vercel).
2. For **EC2**, set up a Node.js environment with PM2 and use a reverse proxy like Nginx.

## 5. Integrating Print-on-Demand
To make the "Direct-to-Print" feature live:
1. Sign up for the **Printful API**.
2. Replace the simulated logic in `src/app/dashboard/kit/page.tsx` with actual API calls to Printful's `/orders` endpoint.
3. Pass the generated high-res PNG URL to their fulfillment engine.

## 6. International Payments
Ensure you have switched from "Test Mode" to "Live Mode" in your Stripe and Razorpay dashboards before launching.
