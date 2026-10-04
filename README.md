# Kanvaz Galeri — Premium Creative Landing Page

> A modern, photography-led landing page concept for **Kanvaz Galeri**, a creative art-supply and product business based in Pekanbaru, Riau.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](#)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=111111)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=111111)](#)

## About

Kanvaz Galeri is a landing page built to present a creative local business through a clean, expressive, and interaction-focused web experience.

The visual direction takes inspiration from premium editorial websites and modern motion design, while maintaining an independent visual identity for Kanvaz Galeri. The interface combines a light, minimal foundation with a red accent palette centered around `#DC2626`.

The page is designed around visual storytelling and direct conversion through WhatsApp.

## Highlights

- Responsive one-page landing page
- Editorial-style hero section
- GSAP-powered reveal and scroll animations
- Infinite marquee
- Bento-style product and category presentation
- Image parallax and hover interactions
- Magnetic CTA buttons
- Desktop custom cursor
- Mobile navigation
- Product showcase
- Creative storytelling sections
- School / education section
- Custom product section
- Interactive gallery with lightbox
- FAQ accordion
- Scroll progress indicator
- Reduced-motion support
- Local SVG branding assets

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure |
| Tailwind CSS (CDN) | Utility styling and responsive layout |
| CSS3 | Custom visual styling and component behavior |
| Vanilla JavaScript | UI logic and interaction |
| GSAP 3.12.5 | Motion and animation |
| GSAP ScrollTrigger | Scroll-based animation |
| Iconify | Interface icons |
| Google Fonts | Manrope & DM Mono |

## Project Structure

```text
kanvazgaleri2/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── icons/
    │   ├── logokanvaz.svg
    │   └── favicon-kanvaz.svg
    └── images/
```

## Getting Started

This project does not require Node.js or a build process. External libraries are loaded through CDN.

### Using VS Code + Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click the file and choose **Open with Live Server**.

### Using Python

From the project directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

Using a local HTTP server is recommended for a more reliable development environment than opening the HTML file directly with `file://`.

## Branding & Assets

The project uses the Kanvaz Galeri SVG logo for the main brand presentation.

Main branding asset:

```text
assets/icons/logokanvaz.svg
```

The browser favicon uses a separate icon-only asset:

```text
assets/icons/favicon-kanvaz.svg
```

For the final visual result, replace temporary photography with original Kanvaz Galeri photos while keeping the existing layout and image configuration.

## Image Configuration

Temporary image sources are centralized in the `IMAGES` configuration object near the top of:

```text
js/main.js
```

Example:

```javascript
const IMAGES = {
  heroMain: 'assets/images/hero-main.webp',
  heroFloat: 'assets/images/hero-float.webp',
  prodCanvas: 'assets/images/product-canvas.webp',
  prodPaint: 'assets/images/product-paint.webp'
};
```

This makes it possible to replace the visual assets without changing the animation and interaction logic.

Recommended image formats:

- WebP for regular web photography
- SVG for vector branding
- PNG when transparency is required

## Design Direction

The interface follows a minimal editorial approach:

- White and neutral surfaces
- Red accent color
- Strong typography hierarchy
- Large photography
- Generous whitespace
- Layered visual composition
- Subtle motion instead of excessive effects

The goal is to make the website feel like a **premium creative brand experience**, rather than a conventional marketplace layout.

## Responsive Experience

The layout is designed for:

- Mobile
- Tablet
- Desktop
- Large desktop

Mouse-dependent interactions such as the custom cursor, magnetic buttons, and tilt effects are treated as desktop enhancements, while the core navigation and content remain accessible on touch devices.

## Brand Contact

**Kanvaz Galeri**  
Pekanbaru, Riau, Indonesia

Instagram: [@kanvaz_galeri](https://www.instagram.com/kanvaz_galeri/)  
Facebook: [Kanvaz Galeri](https://www.facebook.com/kanvaz.galeripku/)

## Status

This repository contains the current landing page implementation and its supporting front-end assets.

Some photography may still use temporary web imagery during development and can be replaced with original brand photography before production deployment.

---

### License

This project is developed for the Kanvaz Galeri website concept and implementation.
