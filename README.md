This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, set ".env" file in root dir:

```bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =

//prisma
DATABASE_URL =

//kakao map
NEXT_PUBLIC_APPKEY;

```

Second, install node_module and then set prima

```
npm install

npx prisma generate
npx prisma db push


```

Finally, run development server

```
npm run dev
```

## used Skills

-   Front/Back : Next.js 14.1
-   Prisma : MongoDB
-   UI Library: shadcn/ui
-   Auth : clerk
-   HTTP : axios
-   State Management: React-Query / zustand
-   External Library: Kakao.maps

## Deploy on Vercel

link: https://climb-tawny.vercel.app/
git repo: https://github.com/weeeeey/climb
