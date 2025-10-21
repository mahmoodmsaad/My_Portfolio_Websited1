# Portfolio Site for M. Saad Mahmood

This repository contains a single-page portfolio tailored for your computational chemistry research profile. It is built with vanilla HTML, CSS, and JavaScript so you can host it easily on GitHub Pages and edit it directly from the browser.

## 🌐 Live Site

**Live URL**: https://mahmoodmsaad.github.io/My_Portfolio_Websited1/

> **Note**: If the site is not yet accessible, you need to complete the one-time GitHub Pages setup. See [SETUP_GITHUB_PAGES.md](SETUP_GITHUB_PAGES.md) for instructions.

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

**Automatic Deployment is Already Configured!** 🎉

This repository is set up with GitHub Actions for automatic deployment. Every push to the `main` branch automatically deploys your site to GitHub Pages.

### First-Time Setup (Owner Only)

The repository owner needs to enable GitHub Pages once:

1. Go to [Repository Settings → Pages](https://github.com/mahmoodmsaad/My_Portfolio_Websited1/settings/pages)
2. Under "Build and deployment", set **Source** to **"GitHub Actions"**
3. Save and wait 1-2 minutes

**That's it!** Your site will be live at: `https://mahmoodmsaad.github.io/My_Portfolio_Websited1/`

For detailed instructions, see [SETUP_GITHUB_PAGES.md](SETUP_GITHUB_PAGES.md).

### Updating Your Site

Simply commit and push changes to the `main` branch:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site within 1-2 minutes.

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
