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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## App Link -

https://ipsator.vercel.app/

## Tech Stack -

TECH STACK - Next.js, React, Typescript, Tailwind

## Design Overview:

1. The application utilizes '/products' and '/categories' APIs sourced from the internet. Data fetching for products and categories is done in the server component page.tsx.
2. For this relatively simple application, there was no need to incorporate a state management library like Redux. The data could be effectively managed at the top-level component. If the application were to expand with multiple routes requiring data sharing, Context APIs and Redux could be considered.
3. To maintain clean, maintainable, and readable code, a custom hooks file was created to separate HTML from JavaScript computations.
4. Although routing was not necessary in this single-view app, dynamic routing could be implemented for each product to display its details.
5. The app's UI design was inspired by Google shopping, acknowledging a focus on frontend implementation rather than UX design.
6. To centralize information about the base API URL, an environment.ts file was utilized. This ensures a single update point for any URL changes.
7. Leveraging the Image component from the Next framework offers numerous optimizations, including lazy loading and responsive image sizes, contributing to enhanced performance.

## Potential Next Steps for App Improvement:

1. Enhance the user interface further to improve visual appeal and usability.
2. Implement dynamic routing for product details pages, enabling users to click on each product card for more information.
3. As the application grows in complexity or requires more sophisticated state management, consider integrating Context APIs and Redux.
4. Optimize performance by employing useMemo and useCallback hooks where necessary to prevent unnecessary recalculations and re-renders.
5. Explore browser storage options to cache API data, reducing the need for repeated API calls on page reloads.
6. Centralize interfaces in a common file, avoiding redundancy and promoting consistent typing across the application.

By incorporating these potential improvements, the application can evolve into a more polished, feature-rich, and efficient user experience.
