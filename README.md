# SEDATED — Preview Shop (Static)

**What you have:** a single-page static site (index.html, styles.css, script.js) with:
- Fullscreen intro using your provided collage (`assets/hero.jpg`)
- Circular emblem overlay (`assets/emblem.svg`)
- Email signup form (opens a mailto)
- "Shop" section with 6 products; each "Pre‑Order" opens a mailto pre-filled with the item

## Replace images with your exact assets
- **Intro background:** replace `assets/hero.jpg`
- **Product tiles:** replace `assets/products-a.jpg` and `assets/products-b.jpg`
  - If you have individual product images, drop them into `/assets` and then update each `<img src="assets/…">` in `index.html` inside the six `<article class="card">` blocks.
  - To adjust framing, keep the helper classes on the wrapper: `media`, `crop-left`, `crop-right`, `crop-center`.

## Deploy in one minute
- **Netlify Drop:** https://app.netlify.com/drop → drag the ZIP → copy your `*.netlify.app` link
- **GitHub Pages:** push to a repo → Settings → Pages → Branch: `main`, folder: `/ (root)`

© 2025 SEDATED — Preview
