# Portfolio template

Files added:

- `portfolio-template.html` — a self-contained portfolio page (hero, about, projects, contact, modal)
- `portfolio.css` — styles for the template (responsive)
- `portfolio.js` — minimal JavaScript for mobile nav, modal, and year injection

How to use

1. Preview: open `portfolio-template.html` in your browser (double-click or use Live Server).
2. Replace placeholder text (Your Name, email, project descriptions) with your content.
3. To make this your site's homepage, rename `portfolio-template.html` to `index.html` (or update your server). Keep backups of the original `index.html` if you have one.
4. Link live project URLs by updating the "Live" links in each project card.

Notes

- The template is intentionally dependency-free (no build step required).
- The contact form uses a mailto action by default. Replace the form `action` with your backend endpoint or a form service if you want server-side handling.
- Add images by replacing the `.thumb` backgrounds with <img> tags or by setting background-image in CSS or inline styles.

Want customization? I can:

- Convert this into a multi-page site or a static site generator template (Jekyll, Eleventy)
- Add a projects JSON + script to render cards dynamically
- Replace the mailto form with a Netlify/Formspree/Axios handler
