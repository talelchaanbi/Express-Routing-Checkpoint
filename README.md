# Express Routing Checkpoint

Creative three-page Express.js site featuring a working-hours access gate, EJS views, and responsive glassmorphism-inspired UI.

## Features

- Express server with custom middleware that only serves pages Monday to Friday between 09:00 and 17:00.
- EJS templates for Home, Services, and Contact pages with a shared navbar and rich content sections.
- Pure CSS styling (no frameworks) with responsive grids, gradients, marquee, and hover interactions.
- Static assets served from `public/`, templates in `views/`, routes configured in `server.js`.

## Getting Started

```bash
npm install
npm run dev   # start with nodemon
# or
npm start     # start with node
```

Visit `http://localhost:3000`. The middleware will block access outside of working hours and show a friendly message.

## Project Structure

```
Express_Checkpoint/
├── public/
│   └── css/style.css
├── views/
│   ├── home.ejs
│   ├── services.ejs
│   ├── contact.ejs
│   ├── off-hours.ejs
│   ├── not-found.ejs
│   └── partials/navbar.ejs
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Deployment Checklist

1. Copy the contents of this folder.
2. Run `npm install` to pull dependencies.
3. Configure environment variables if needed (port defaults to `3000`).
4. Deploy to your preferred Node hosting (Render, Railway, etc.).

## GitHub

Initialized for remote `https://github.com/talelchaanbi/Express-Routing-Checkpoint`. Run:

```bash
git init
git remote add origin https://github.com/talelchaanbi/Express-Routing-Checkpoint
git add .
git commit -m "Initial commit"
git push -u origin main
```

Happy shipping!
