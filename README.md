# Otomaton - Game Development & Automation Solutions

This is the official website for Otomaton, a game development studio specializing in game creation, Unity assets, and automation/optimization tools.

## Features

- Retro-styled website with modern technology underneath
- Responsive design that works on all devices
- Showcases games, Unity assets, and automation tools
- Contact form for project inquiries
- Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Hosting**: Cloudflare Pages
- **Deployment**: OpenNext with Cloudflare integration

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

## Project Structure

- `app/` - Next.js app directory
  - `components/` - Reusable UI components
  - `data/` - Static content/data
  - `lib/` - Utility functions
  - `styles/` - Custom styling
- `public/` - Static assets

## Deployment

The site is configured to deploy to Cloudflare Pages. Use the following commands:

```bash
# Preview the site
npm run preview

# Deploy to Cloudflare Pages
npm run deploy

# Upload assets only
npm run upload
```

## Customization

- Edit `app/data/projects.ts` to update the showcased projects
- Modify the components in `app/components/` to change the UI
- Update styles in `app/globals.css` for visual adjustments

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [OpenNext Documentation](https://cloudflare.com)