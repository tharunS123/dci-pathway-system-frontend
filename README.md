This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## .env file template

```
# Created by Vercel CLI
# Database connection string
DATABASE_URL=postgresql://neondb_owner:npg_InU8FrkAv0CK@ep-cool-bonus-ad62fl70-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# Flask backend URL
NEXT_PUBLIC_FLASK_URL="http://127.0.0.1:8000" # "https://dci-pathway-system-backend.vercel.app"

# Stack configuration
NEXT_PUBLIC_STACK_PROJECT_ID=66e0cbed-678a-476e-b6fb-0f5773484acc
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_dfws8wnvj7rpt2jy6j42d48w1p2c128t8h45m4p96n5eg
STACK_SECRET_SERVER_KEY=ssk_8bs255an7dya6extc0egd48k1y8vf9ts9kpt09dzg3xtr

# Vercel OIDC Token
VERCEL_OIDC_TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1yay00MzAyZWMxYjY3MGY0OGE5OGFkNjFkYWRlNGEyM2JlNyJ9.eyJpc3MiOiJodHRwczovL29pZGMudmVyY2VsLmNvbS90aGFydW5zMTIzcy1wcm9qZWN0cyIsInN1YiI6Im93bmVyOnRoYXJ1bnMxMjNzLXByb2plY3RzOnByb2plY3Q6ZGNpLXBhdGh3YXktc3lzdGVtLWZyb250ZW5kOmVudmlyb25tZW50OmRldmVsb3BtZW50Iiwic2NvcGUiOiJvd25lcjp0aGFydW5zMTIzcy1wcm9qZWN0czpwcm9qZWN0OmRjaS1wYXRod2F5LXN5c3RlbS1mcm9udGVuZDplbnZpcm9ubWVudDpkZXZlbG9wbWVudCIsImF1ZCI6Imh0dHBzOi8vdmVyY2VsLmNvbS90aGFydW5zMTIzcy1wcm9qZWN0cyIsIm93bmVyIjoidGhhcnVuczEyM3MtcHJvamVjdHMiLCJvd25lcl9pZCI6InRlYW1fZFhROGtJOXBrajRHeGI4SzBBanRYc2c5IiwicHJvamVjdCI6ImRjaS1wYXRod2F5LXN5c3RlbS1mcm9udGVuZCIsInByb2plY3RfaWQiOiJwcmpfUWUwQXJXRzFGY3MzMjZrOHJneDFMRVRFakFkZiIsImVudmlyb25tZW50IjoiZGV2ZWxvcG1lbnQiLCJwbGFuIjoiaG9iYnkiLCJ1c2VyX2lkIjoiUTMweTRpU3JuTWpjQUZHS1BYdVlHTVN6IiwibmJmIjoxNzY1Mjk3Mzg4LCJpYXQiOjE3NjUyOTczODgsImV4cCI6MTc2NTM0MDU4OH0.AkLrn_FZjjwvgN9EbyWhwCOCO0tznrbL0Wroxaz_z_wplKKKMWr-axtBCcIbB-JpXLw4qj7a3REOCJfqp1MHQpdgY19-Q6FFlo1dyhikawcGFaOnj3yhzU2X2AFLEp5UT56jGH6quC4f1tE3zaaiFjx3hxuoMIdWDNMGC0s7w9hKvC8sUo1kZSaa1nNipE2BMRK1dyFL3jRyLlYMgyQHPw2tW9Q-zgTvJ62q5wRtr2o_TR6TLlQQz6NLu49St-x62ydwJoH-FFMYB-KNZI3NdGLX0V2oLs0gDtbe16ltAjEZpHDS_jSuyV1ieF2r2BIKBARns3fLMQTOHlAI_aLqGA"
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
