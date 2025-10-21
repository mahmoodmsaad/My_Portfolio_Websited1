# Portfolio Site for M. Saad Mahmood

This repository contains a single-page portfolio tailored for your computational chemistry research profile. It is built with vanilla HTML, CSS, and JavaScript so you can host it easily on GitHub Pages and edit it directly from the browser.

## Project Structure

- `index.html` – main page layout and content
- `styles.css` – global styling, responsive layout rules, and component styles
- `script.js` – navigation toggle, section highlighting, and dynamic year
- `assets/` – CV (`saad-cv.pdf`), placeholder imagery, and any future media

## Local Preview

1. Open the folder in VS Code or your editor of choice.
2. Serve the site locally (Pick one):
   - `python -m http.server 8000`
   - `npx serve`
3. Visit `http://localhost:8000` in your browser.

## Deploying to GitHub Pages

1. Create a new **private** GitHub repository (for example, `saad-portfolio`).
2. Copy the project files into the repository root (`index.html`, `styles.css`, `script.js`, `assets/`, `README.md`).
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add portfolio site"
   git push origin main
   ```
4. In the repository settings:
   - Open **Pages**.
   - Under **Build and deployment**, choose **Deploy from a branch**.
   - Select the `main` branch and the `/ (root)` folder.
   - Save. GitHub will publish the site at `https://<your-username>.github.io/<repository-name>/`.
5. Optional: add a custom domain in the same **Pages** settings section.

Because the repository is private, only you can push changes. GitHub Pages will still host the public site, while editing rights remain yours.

## Editing Content in the Browser

You can update text, sections, and links without leaving GitHub:

1. In the repository, press `.` or click **Code → Open with github.dev** to launch the VS Code-like editor in your browser.
2. Modify `index.html`, `styles.css`, or `script.js` as needed and commit.
3. Pages will rebuild automatically within a minute or two.

For quick tweaks (like replacing placeholder text or updating publications):

- Hero intro and quick facts: `index.html` lines 30-60.
- About/Research cards: `index.html` lines ~65-160.
- Experience timeline: `index.html` lines ~140-200.
- Skills and certifications: `index.html` lines ~200-240.
- Contact details and social links: `index.html` lines ~285-305.

Replace the placeholder SVGs in `assets/` with your own images when ready. Keep filenames consistent or update the paths in `index.html`.

## Keeping Your CV Updated

1. Replace `assets/saad-cv.pdf` with the latest PDF (same filename).
2. Commit the change. The download button updates automatically.

## Suggested Next Steps

- Add real publication URLs, datasets, and project demos when they are ready.
- Swap the gallery SVGs for photos from conferences, lab sessions, or prototypes.
- If you want an in-browser CMS later, Netlify CMS or TinaCMS can plug into this repo while keeping edits gated behind your GitHub login.
