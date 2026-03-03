# White Lions Legacies

White Lions Legacies is a car sales and import company based in **Gweru CBD, Zimbabwe**.

We:

- Sell a wide range of cars
- Import cars from the **UK** and **South Africa**
- Help customers place **custom orders** (choose your preferred car color and specifications)

## Project Overview

This repository contains the source code for the White Lions Legacies website.

Core user flows:

- Browse cars
- View car details
- Add cars to cart
- Review cart (update quantities, remove items, clear cart)
- Checkout (collect buyer details and generate an order email)
- Read blog posts and open "Recent Posts"

## Features

- Car listing with filtering/search and sorting
- Car details page with "Add to Cart" and "View Cart" actions
- Cart state stored globally via React Context and persisted in `localStorage`
- Checkout page that collects buyer details and generates an order email
- Blog list and blog details pages with working deep links
- Safe image component to prevent broken images from breaking the UI

## Tech Stack

- React (Create React App)
- React Router DOM (routing)
- Reactstrap + Bootstrap (layout/components)
- Remix Icon + React Icons

## Routes

Main routes are defined in `src/routers/Routers.js`:

- `/home`
- `/about`
- `/cars`
- `/cars/:slug`
- `/blogs`
- `/blogs/:slug`
- `/contact`
- `/cart`
- `/checkout`
- `/how-it-works`
- `/privacy`
- `/terms`
- `/buying-selling`

## Cart & Checkout

Cart logic lives in:

- `src/context/CartContext.js`

Behavior:

- Add to cart from car cards and car details
- Cart persists across refresh via `localStorage`
- Cart page (`/cart`) supports quantity updates, removing items, and clearing the cart
- Checkout page (`/checkout`) collects buyer details and generates an email order summary

## Data & Content

- Cars:
  - `src/assets/data/products.json`
  - `src/assets/data/carData.js` (merges product data + image mapping)
- Blogs:
  - `src/assets/data/blogData.js`

## Images

Car images are currently configured to use a local placeholder for reliability:

- `imageUrl: "/logo.jpg"` in `products.json`

The UI uses `SafeImage` (`src/components/UI/SafeImage.jsx`) to fall back to the logo if an image fails to load.

## Contact

- **Location**: Gweru CBD, Zimbabwe
- **Phone**: +263 78 252 8050 / +263 71 626 4988
- **Email**: contact@whitelionslegacies.com

## Office Hours

- **Monday - Saturday**: 8am - 5pm
- **Sunday**: 10am - 2pm

## Email Subscription

Newsletter subscription requests should be sent to:

- contact@kawerifytech.com

## Development

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run (Development)

```bash
npm start
```

The app will start on a local dev server (Create React App default, usually `http://localhost:3000`).

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## Deployment

This app is a standard CRA build. Deploy the contents of the `build/` folder to any static hosting provider.

Notes:

- If hosting under a subpath, set the `homepage` field in `package.json`.

## License

See `LICENSE`.

## Credits

Website developed by **Kawerify Tech**.
