# Deployment Guide for LogoAI

This guide provides instructions on how to push the LogoAI tool to a live server.

## 1. Prerequisites
- A Vercel or AWS account.
- A Google Gemini API Key or OpenRouter API Key.
- Razorpay and Stripe API keys (for live payments).
- A managed SQLite (e.g., Turso) or Postgres database (if migrating from SQLite).

## 2. Environment Variables
Ensure the following variables are set in your production environment:
```env
DATABASE_URL="file:./dev.db" # Or your production DB URL
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="https://yourdomain.com"
GOOGLE_GEMINI_API_KEY="your-api-key"
OPENROUTER_API_KEY="your-api-key"
```

## 3. Deploying to Vercel (Recommended)
Vercel is the easiest platform for Next.js applications.
1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Configure the Environment Variables in the Vercel dashboard.
4. **Crucial:** Ensure the build command is set to `npx prisma generate && next build`. This is already configured in `package.json`, but verify it in the Vercel Settings > Build & Development settings.
5. Deploy!

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
