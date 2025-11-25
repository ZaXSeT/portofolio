# 🚀 QUICK START - PUSH TO GITHUB

## Prerequisites

Before you start, make sure you have:
1. ✅ GitHub account (create at https://github.com)
2. ✅ Created a new repository on GitHub

## Step-by-Step Guide

### 1️⃣ Install Git (If Not Installed)

Double-click: `install-git.bat`
- This will download and install Git for Windows
- Follow the installer prompts (use default settings)
- **IMPORTANT:** After installation, close and reopen your terminal/command prompt

### 2️⃣ Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Repository name: `portfolio` (or any name you like)
4. Description: "My portfolio website with scroll-linked animations"
5. Choose: **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"
8. Copy the repository URL (e.g., `https://github.com/yourusername/portfolio.git`)

### 3️⃣ Push to GitHub

Double-click: `push-to-github.bat`

The script will ask you for:
1. **GitHub username** - Your GitHub username
2. **GitHub email** - Your GitHub email
3. **Repository URL** - The URL you copied in step 2

Example:
```
Enter your GitHub username: johndoe
Enter your GitHub email: john@example.com
Enter your GitHub repository URL: https://github.com/johndoe/portfolio.git
```

### 4️⃣ Authentication

When pushing, you'll need to authenticate:

**Option A: Personal Access Token (Recommended)**
1. Go to GitHub.com → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Select scope: `repo` (Full control of private repositories)
5. Generate token and **COPY IT**
6. When prompted for password, paste the token

**Option B: GitHub CLI**
```bash
# Install GitHub CLI first
winget install GitHub.cli

# Authenticate
gh auth login
```

### 5️⃣ Verify

After successful push:
1. Go to your GitHub repository URL
2. Refresh the page
3. You should see all your files!

## 🔄 Future Updates

To push new changes:

```bash
# Add all changes
git add .

# Commit with message
git commit -m "Your commit message"

# Push to GitHub
git push
```

Or simply run `push-to-github.bat` again!

## ❌ Troubleshooting

### "Git is not recognized"
- Git is not installed or not in PATH
- Run `install-git.bat`
- Restart your terminal

### "Authentication failed"
- Wrong username/password
- Use Personal Access Token instead of password
- See Step 4 above

### "Permission denied"
- You don't have write access to the repository
- Make sure the repository URL is correct
- Make sure you're the owner of the repository

### "Repository not found"
- Wrong repository URL
- Repository doesn't exist
- Check the URL and try again

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Git Docs: https://git-scm.com/doc
- Stack Overflow: https://stackoverflow.com

## 🎉 Success!

Once pushed, your code is safely backed up on GitHub and you can:
- Share your portfolio with others
- Deploy to Vercel/Netlify
- Collaborate with others
- Track changes over time

---

**Ready to push? Run `push-to-github.bat` now!** 🚀
