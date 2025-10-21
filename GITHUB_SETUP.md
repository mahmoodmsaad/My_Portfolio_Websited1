# 🚀 Quick GitHub Setup Instructions

## Step-by-Step Guide to Deploy Your Portfolio

### Part 1: Create GitHub Repository (Do this first!)

1. **Go to GitHub**: https://github.com/new
2. **Sign in** with your GitHub account (or create one at https://github.com/signup)
3. **Fill in the repository details**:
   - **Repository name**: `portfolio` (or `saad-portfolio` or any name you prefer)
   - **Description**: "Personal research portfolio with live editing capabilities"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **Important**: Do NOT check "Add a README file" or any other initialization options
4. **Click**: "Create repository"

### Part 2: Push Your Code (After creating the repository)

GitHub will show you a page with commands. **IGNORE those** and use these instead:

Open PowerShell in VS Code and run these commands **one by one**:

```powershell
# Navigate to your project
cd C:\Users\mahmo\Downloads\empty_test

# Add your GitHub repository as remote
# REPLACE 'YOUR_USERNAME' with your actual GitHub username!
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code to GitHub
git push -u origin main
```

**Example**: If your GitHub username is `saadmahmood`, use:
```powershell
git remote add origin https://github.com/saadmahmood/portfolio.git
git push -u origin main
```

You'll be prompted to sign in to GitHub (this is normal).

### Part 3: Enable GitHub Pages

1. **Go to your repository** on GitHub:
   - URL will be: `https://github.com/YOUR_USERNAME/portfolio`

2. **Click "Settings"** tab at the top of the page

3. **Click "Pages"** in the left sidebar (under "Code and automation")

4. **Configure GitHub Pages**:
   - Under "Build and deployment"
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" 
   - **Folder**: Select "/ (root)"
   - **Click "Save"**

5. **Wait 1-2 minutes** for deployment

6. **Refresh the page** - you'll see a green box at the top with your live URL:
   - `https://YOUR_USERNAME.github.io/portfolio/`

### Part 4: View Your Live Website! 🎉

Click the URL from GitHub Pages or visit:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## 📝 What's Your GitHub Username?

**Please provide your GitHub username so I can prepare the exact commands for you!**

Common GitHub usernames from your email (mahmoodmsaad9@gmail.com):
- `mahmoodmsaad9`
- `saadmahmood`
- `msaadmahmood`
- Or something else?

Once you tell me, I'll give you the **exact commands** to copy and paste!

---

## ⚠️ Troubleshooting

### If you don't have a GitHub account:
1. Go to https://github.com/signup
2. Create a free account
3. Verify your email
4. Then follow the steps above

### If push asks for password:
- GitHub no longer accepts passwords for git operations
- Use a **Personal Access Token** instead:
  1. Go to https://github.com/settings/tokens
  2. Click "Generate new token (classic)"
  3. Give it a name, select "repo" scope
  4. Copy the token (save it somewhere safe!)
  5. Use this token as your password when pushing

### If remote already exists:
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

---

## 🎯 Next Steps After Deployment

1. Test the edit mode on your live site (click the pencil icon!)
2. Update placeholder content with your real information
3. Replace profile image in `assets/` folder
4. Update your CV file
5. Add real project links and publications

Your portfolio is ready to impress! 🌟
