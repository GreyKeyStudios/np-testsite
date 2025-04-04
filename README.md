# Nonprofit Website

A modern non-profit website built with Next.js and shadcn/ui, originally created with v0.dev.

## Deployment to GitHub Pages

This website is configured to be deployed to GitHub Pages. Follow these steps:

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set "Source" to "GitHub Actions"
5. The site will automatically be built and deployed when you push to the main branch

## Local Development

To run the site locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Build

To build the static site:

```bash
npm run export
```

This will create a `out` directory with static files that can be deployed to any static hosting service. 