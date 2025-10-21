# Portfolio Site for M. Saad Mahmood

This repository contains a single-page portfolio tailored for your computational chemistry research profile. It is built with vanilla HTML, CSS, and JavaScript so you can host it easily on GitHub Pages and edit it directly from the browser.

## 🌐 Live Website

Visit the live portfolio at: **https://mahmoodmsaad.github.io/My_Portfolio_Websited1/**

The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

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

This repository is already configured with GitHub Actions for automatic deployment to GitHub Pages.

### How it works:
1. When you push changes to the `main` branch, GitHub Actions automatically deploys the site
2. The workflow file (`.github/workflows/deploy.yml`) handles the deployment process
3. The site is published at `https://mahmoodmsaad.github.io/My_Portfolio_Websited1/`

### Manual deployment:
You can also trigger a manual deployment:
1. Go to the repository on GitHub
2. Click the **Actions** tab
3. Select the **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

No additional setup is required - GitHub Pages is automatically configured through the workflow.

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
