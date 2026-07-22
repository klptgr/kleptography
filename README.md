# Kleptography

A minimalist photography portfolio built with **Hugo**, designed for high-impact visual storytelling and seamless performance.

## Project Overview

This site is a custom implementation of the [Hugo Gallery Theme](https://github.com/nicokaiser/hugo-theme-gallery/), heavily adapted to follow the minimalist aesthetics of the [Clay theme](https://github.com/lilxyzz/clay-theme). It features a clean, typography-focused design with a specialized "Flow" feed for social-media style updates.

### Key Features

- **Custom Flow Layout**: A single-column, social-media inspired feed with height-capped vertical images (85vh) to ensure a comfortable browsing experience.
- **Enhanced Metadata**: Support for custom titles and descriptions per image, managed directly through Hugo's resource metadata.
- **Optimized SCSS**: A modular, cleaned-up CSS architecture focused on performance and maintainability.
- **Dynamic Footer**: A centered footer with a dynamically updating copyright year and matched navigation styles.
- **Lightbox Integration**: Full PhotoSwipe integration for immersive, full-screen image viewing.
- **Cloudflare Pages Ready**: Optimized for deployment on Cloudflare's global edge network.

## Technical Stack

- **Framework**: [Hugo](https://gohugo.io/) (Extended Version)
- **Base Theme**: [Hugo Gallery](https://github.com/nicokaiser/hugo-theme-gallery/)
- **Styles**: Modular SCSS with a custom variables system.
- **Images**: Automated processing (WebP/JPEG) with lazy-loading support.
- **Lightbox**: [PhotoSwipe v5](https://photoswipe.com/) with dynamic caption support.

## Project Structure

```text
├── assets/
│   ├── css/
│   │   ├── site/           # Modular SCSS components
│   │   │   ├── _variables.scss
│   │   │   ├── _layout.scss
│   │   │   ├── _album.scss   # Core gallery & flow styles
│   │   │   └── _footer.scss  # Dynamic footer styles
│   │   └── custom.scss     # Main entry point for custom styles
│   └── js/
│       └── flow-lightbox.js # Specialized lightbox for Flow feed
├── content/
│   ├── flow/               # Social-style image feed
│   ├── portfolio/          # Themed collections
│   └── stories/            # Narrative photo essays
├── layouts/
│   └── partials/           # Custom template overrides
└── hugo.toml               # Site configuration
```

## Development

To run the site locally:

```bash
hugo server -D
```

For environments requiring polling (like some virtual filesystems):

```bash
hugo server --poll 700ms
```

## Deployment

The site is automatically built and deployed to **Cloudflare Pages** on every push to the `main` branch.

- **Production URL**: [kleptography.pages.dev](https://kleptography.pages.dev/)
- **Repository**: [github.com/klptgr/kleptography](https://github.com/klptgr/kleptography)
