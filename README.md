# QECS website
npm install && cp .env.example .env && npm run dev   # http://localhost:3000
npm test | npm run build | npx prisma db push | vercel --prod
Replace placeholders in lib/content.ts and set src paths for real photos (put files in /public/images).
