This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Sentry Integration with Next.js - Getting Started

#### Setup Steps

1. **Install Sentry SDK**

   ```bash
   npm install @sentry/nextjs
   ```

2. **Configure Sentry**

   - Create a `sentry.client.config.js` and `sentry.server.config.js` in the root directory.
   - Add the following configuration to each file:

     **sentry.client.config.js**

     ```javascript
     import * as Sentry from "@sentry/nextjs";

     Sentry.init({
       dsn: "YOUR_SENTRY_DSN",
       tracesSampleRate: 1.0,
     });
     ```

     **sentry.server.config.js**

     ```javascript
     import * as Sentry from "@sentry/nextjs";

     Sentry.init({
       dsn: "YOUR_SENTRY_DSN",
       tracesSampleRate: 1.0,
     });
     ```

3. **Update `next.config.js`**

   - Add the following to `next.config.js`:

     ```javascript
     const withSentry = require("@sentry/nextjs");

     module.exports = withSentry({
       // Your Next.js config
     });
     ```

4. **Deploy and Verify**
   - Deploy your application.
   - Verify Sentry is capturing errors by triggering a test error or checking the Sentry dashboard.
