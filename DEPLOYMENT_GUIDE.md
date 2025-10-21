# 🚀 GitHub Pages Deployment Guide

## Quick Start - Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Description**: "Personal research portfolio with live editing"
   - **Public** or **Private**: Choose **Public** (Private repos need GitHub Pro for Pages)
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Run these commands in your terminal (PowerShell):

```powershell
cd C:\Users\mahmo\Downloads\empty_test

# Add the GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `saadmahmood`, the command would be:
```powershell
git remote add origin https://github.com/saadmahmood/portfolio.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/portfolio`
2. Click **"Settings"** tab (top right)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **"main"** and **"/ (root)"**
   - Click **"Save"**

### Step 4: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll see a green checkmark and URL when ready
- Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## ✏️ How to Use Live Edit Mode

Your portfolio now has a **live editing feature** that lets you edit content directly in the browser!

### Editing Your Content

1. **Visit your live website** (after deployment)
2. **Click the pencil icon** (✏️) in the top navigation bar
3. **Click any text** on the page to edit it
4. **Make your changes** - the text becomes editable
5. **Click "Save Changes"** button (appears at bottom right)
6. **Your changes are saved** in your browser's localStorage

### Keyboard Shortcuts

- **Ctrl+S** (Windows) or **Cmd+S** (Mac): Quick save
- **Escape**: Exit edit mode

### Important Notes About Edit Mode

⚠️ **Changes are stored locally in your browser**:
- Edits are saved to your browser's localStorage
- Changes persist when you refresh the page
- Changes are **NOT automatically pushed to GitHub**
- Different browsers/devices will have different edits

### Making Permanent Changes

To make your edits permanent and visible to everyone:

1. **After editing in the browser**, you need to manually update the HTML file
2. Edit `index.html` directly in VS Code with your changes
3. Commit and push:
   ```powershell
   cd C:\Users\mahmo\Downloads\empty_test
   git add .
   git commit -m "Update content"
   git push origin main
   ```
4. GitHub Pages will automatically redeploy (takes 1-2 minutes)

**OR** Use GitHub's web editor:
1. Go to your repository on GitHub
2. Click on `index.html`
3. Click the pencil icon to edit
4. Make changes and commit directly

---

## 🔄 Updating Your Website

### Method 1: Edit Locally & Push

```powershell
cd C:\Users\mahmo\Downloads\empty_test

# Make your changes to index.html, styles.css, or script.js

# Commit and push
git add .
git commit -m "Description of your changes"
git push origin main
```

### Method 2: Edit on GitHub Directly

1. Go to your repository: `https://github.com/YOUR_USERNAME/portfolio`
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Scroll down, add commit message, click **"Commit changes"**
6. GitHub Pages auto-deploys in 1-2 minutes

### Method 3: Use GitHub.dev (VS Code in Browser)

1. Go to your repository on GitHub
2. Press the **`.` (period)** key on your keyboard
3. OR change `.com` to `.dev` in the URL
4. Edit files in a full VS Code environment
5. Commit changes using the Source Control panel

---

## 📱 Custom Domain (Optional)

To use your own domain (e.g., `saadmahmood.com`):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository **Settings** → **Pages**
3. Enter your custom domain in the **"Custom domain"** field
4. Add DNS records at your registrar:
   - Type: `CNAME`, Host: `www`, Value: `YOUR_USERNAME.github.io`
   - Type: `A`, Host: `@`, Value: GitHub's IP addresses (see GitHub docs)

---

## 🛠️ Testing Locally

Before pushing changes, test locally:

```powershell
cd C:\Users\mahmo\Downloads\empty_test

# Method 1: Python (if installed)
python -m http.server 8000

# Method 2: Node.js (if installed)
npx serve

# Method 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Visit `http://localhost:8000` in your browser

---

## 📋 Common Tasks

### Adding New Images

1. Place images in the `assets/` folder
2. Update HTML to reference them: `<img src="assets/your-image.jpg" alt="Description">`
3. Commit and push

### Updating Your CV

1. Replace `assets/saad-cv.pdf` with your new CV
2. Keep the same filename or update the link in `index.html`
3. Commit and push

### Changing Colors/Styles

1. Edit `styles.css` - look for `:root` variables at the top:
   ```css
   --color-accent: #3b60f6;  /* Change to your preferred color */
   --color-bg: #ffffff;
   ```
2. Commit and push

---

## 🐛 Troubleshooting

### Site not updating after push?

1. Check repository **Actions** tab for build status
2. Wait 2-3 minutes for cache to clear
3. Try hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
4. Clear browser cache

### 404 Error?

- Make sure GitHub Pages is enabled in Settings → Pages
- Verify the branch is set to `main` and folder is `/ (root)`
- Check that `index.html` exists in the root directory

### Edit mode not saving?

- Check browser console (F12) for errors
- Ensure you clicked "Save Changes" button
- Try clearing browser cache and localStorage

### Lost your edits?

- Edit mode saves to localStorage (browser-specific)
- Edits don't sync across devices
- Always manually update `index.html` for permanent changes

---

## 📞 Need Help?

- GitHub Pages Documentation: https://docs.github.com/pages
- Check repository Issues tab
- Contact via email: mahmoodmsaad9@gmail.com

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages
- [ ] Verified site is live
- [ ] Tested edit mode functionality
- [ ] Bookmarked deployment URL
- [ ] Updated placeholder content
- [ ] Replaced profile image
- [ ] Updated CV file

---

**Your site will be live at:**
`https://YOUR_USERNAME.github.io/portfolio/`

Replace `YOUR_USERNAME` with your actual GitHub username!
