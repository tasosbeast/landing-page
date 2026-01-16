# Landing Page Practice Project

A modern, responsive landing page built as a layout practice exercise using HTML, CSS, and vanilla JavaScript. Features a clean design with smooth animations, gradient effects, and mobile navigation.

## Tech Stack

- **HTML5** — Semantic markup structure
- **CSS3** — Custom styling with CSS variables, flexbox, grid, and animations
- **JavaScript (Vanilla)** — Mobile menu toggle and scroll-triggered animations using Intersection Observer API

## How to Run

Simply open `index.html` in your browser:

```bash
# Navigate to the project directory
cd landing-page

# Open in default browser (macOS)
open index.html

# Or (Linux)
xdg-open index.html

# Or (Windows)
start index.html
```

Alternatively, use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Layout Concepts Practiced

- **Flexbox** — Navigation, hero layout, card content alignment
- **CSS Grid** — Responsive feature cards (2-column → 4-column layout)
- **Positioning** — Fixed header, absolute positioning for decorative elements and floating cards
- **Responsive Design** — Mobile-first approach with breakpoints at 640px, 768px, and 1024px
- **CSS Variables** — Color scheme and consistent design tokens
- **CSS Animations** — Keyframe animations for fade-in effects and smooth transitions
- **Intersection Observer API** — Scroll-triggered animations for sections
- **Backdrop Filter** — Glassmorphism effect on fixed header
- **Gradient Effects** — Linear and radial gradients for backgrounds, text, and decorative blobs

## Future Improvements

- [ ] Add accessibility enhancements (ARIA labels, keyboard navigation, focus states)
- [ ] Add form validation for contact/newsletter sections
- [ ] Implement light mode toggle
- [ ] Optimize images with lazy loading and WebP format
- [ ] Refactor CSS using DRY principles (utility classes, component abstraction)
- [ ] Add subtle parallax effects on scroll
