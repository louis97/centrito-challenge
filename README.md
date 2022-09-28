# Centrito Challenge

This is a toy project that we use at Centrito for technical interviews. Currently it includes a very simple main page that lists (fake) products and their prices. Through the course of the interview, we'll add features to this project.

## The Stack

This project is written in Typescript using Next.js. Next.js is a React framework that has a friendly developer experience (live reloads, etc).

For styling, we're just using traditional CSS. Since people tend to use a huge variety of different CSS frameworks, for this exercise we've just gone w/ the common denominator.

As a database, we're using sqlite. Sqlite is a simple SQL database that is stored in a local file. By using it here, we can avoid common challenges and pitfalls in configuring a more traditional SQL database.

## Developing

First, install the dependencies and then run the development server:

```bash
yarn install 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/all](http://localhost:3000/api/all). This endpoint can be edited in `pages/api/all.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Styles are imported in a similar way to typescript imports, see the import at the top of `index.tsx` and how it's use in the corresponding React components.

## The challenges

1. Explore the codebase and make sure you understand how it works. If you have any questions, ask them!
2. What other product data do we have available? Can you add new columns to display them on the page?
3. Take a moment to read the [Next.js Image documentation](https://nextjs.org/docs/basic-features/image-optimization) and look at all the [image properties](https://nextjs.org/docs/api-reference/next/image). In light of what you read, can you improve the image loading experience on the page?
5. We wish to provide users the ability to filter products by category? Can you propose an approach to doing this? After discussing and agreeing on an approach you will implement it.
4. We wish to provide users cart-like functionality? Can you propose an approach to doing this? After discussing and agreeing on an approach you will implement it.
7. We wish to let users check out their cart. Can you propose an approach to doing this? After discussing and agreeing on an approach you will implement it.
6. We wish to have an admin page where internal users can add/delete/edit new products? Can you propose an approach to doing this? After discussing and agreeing on an approach you will implement it.
8. We wish to extend the information we have about products to include a description and a list of ingredients. Can you propose an approach to doing this? After discussing and agreeing on an approach you will implement it.
9. We wish to provide users the ability to search for products by name? Can you propose an approach to doing this? After discussing and agreeing on an approach you will implement it.