# Modern Landing Page - Next.js Template

A stunning, high-performance landing page template built with Next.js and modern CSS. Designed for SaaS, startups, and modern web applications.

## Features

- 🎨 **Modern Aesthetics** - Dark mode, glassmorphism, and glowing gradients
- ⚡ **High Performance** - Built on Next.js 16
- 📱 **Fully Responsive** - Looks great on mobile, tablet, and desktop
- 🧱 **Component-based** - Easy to customize sections (Hero, Features, Pricing)
- 🚀 **Production Ready** - Optimized Docker build

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Modern CSS Variables & Utilities (No external CSS framework dependency)
- **Icons**: Text-based icons for performance (easily swappable)
- **Deployment**: Docker standalone output

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Customization

### Changing the Theme
Edit `app/globals.css` to change the CSS variables:

```css
:root {
  --primary: #your-color;
  --background: #your-bg;
  /* ... */
}
```

### Editing Content
The main page structure is in `app/page.tsx`. It contains the following sections:
- **Navbar**: Logo and navigation links
- **Hero**: Main headline, subheadline, CTA, and mockup image
- **Features**: Grid of feature cards
- **CTA**: Final call to action section
- **Footer**: Copyright and social links

## detailed Project Structure

```
landing-page-modern/
├── app/
│   ├── layout.tsx         # Root layout and metadata
│   ├── page.tsx           # Main landing page content
│   └── globals.css        # Global styles and theme
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── Dockerfile             # Production build
```

## Deployment

This template conforms to KConsole authentication requirements but is designed to be public-facing.

- **Port**: 3000
- **Health Check**: `/`

## License

MIT License - Feel free to use this template for your projects!
