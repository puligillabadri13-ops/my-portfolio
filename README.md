# Badri Puligilla – Personal Developer Portfolio

A modern, responsive, animated personal portfolio website designed for **Badri Puligilla**, a first-year B.Tech CSE (Data Science) student at **Malla Reddy Deemed to be University**. 

Built with clean HTML5, CSS3, and Vanilla JavaScript, following a **dark futuristic developer aesthetic** (deep navy/black background, neon blue and purple accents, glassmorphic cards, glowing borders, and smooth animations).

---

## 🚀 Live Demo & GitHub Pages URL Format

Once published via GitHub Pages under your GitHub account ([puligillabadri13-ops](https://github.com/puligillabadri13-ops)), your live website will be accessible at:

```
https://puligillabadri13-ops.github.io/<repository-name>/
```

*(For example, if your repository is named `portfolio` or `my-portfolio`, the link will be `https://puligillabadri13-ops.github.io/my-portfolio/`)*

---

## 📁 Project Structure

```text
my portfolio/
├── index.html        # Main HTML5 semantic structure & SEO metadata
├── style.css         # Styling, dark futuristic design system, responsive media queries
├── script.js         # Interactive features: typing animation, particles, safe modals
├── projects.js       # Central configuration file for projects, skills, certificates & details
└── README.md         # Documentation & deployment guide
```

---

## ⚡ How to Preview the Website Locally

You can preview the website immediately without installing any complex software:

### Method 1: Direct Browser Launch (Simplest)
1. Open the `my portfolio` folder on your computer.
2. Double-click `index.html`. It will open instantly in your default web browser (Chrome, Edge, Firefox, Brave).

### Method 2: Using VS Code Live Server (Recommended)
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` and automatically refresh when you save changes.

### Method 3: Using Python's Built-in Server
Open PowerShell in the project directory and run:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ✏️ Where to Edit Your Information

All dynamic data and project links are organized cleanly in **`projects.js`**. You do not need to rewrite complex HTML to update your content!

### 1. Updating Project URLs & Repositories
Open `projects.js` and locate the `projects` array:

```javascript
projects: [
  {
    id: "student-study-planner",
    title: "Student Study Planner & Task Manager",
    // ...
    // Replace "YOUR_STUDY_PLANNER_PROJECT_URL" with your live link:
    liveUrl: "https://puligillabadri13-ops.github.io/study-planner",
    githubUrl: "https://github.com/puligillabadri13-ops/study-planner",
    status: "Student Project"
  },
  {
    id: "sih-2026-runtime-rebels",
    title: "SIH 2026 – RUNTIME REBELS",
    // ...
    // Replace "YOUR_SIH_PROJECT_URL" with your project or presentation link:
    liveUrl: "https://your-sih-demo-link.com",
    githubUrl: "https://github.com/puligillabadri13-ops/runtime-rebels-sih",
    status: "Hackathon Concept"
  }
]
```

> **Safe Placeholder Protection**: If `liveUrl` remains set to `YOUR_STUDY_PLANNER_PROJECT_URL` or is left empty, the site automatically prevents broken links. Instead, a sleek popup and notification will inform visitors that the project is in active development and coming soon.

### 2. Updating Certificates & Achievements
In `projects.js`, locate `certificates`:

```javascript
certificates: [
  {
    id: "cert-python",
    title: "Python Course",
    category: "Programming Coursework",
    statusBadge: "Foundations Completed",
    description: "Completed or participated in a Python learning course focused on programming fundamentals...",
    certificateUrl: "" // Paste your Google Drive or certificate credential link here
  },
  // ...
]
```

### 3. Replacing the Default Avatar with Your Personal Photo
The site currently displays an abstract futuristic holographic cybernetic badge (`<Badri.dev />`) so you don't have to upload a personal photo.

If you wish to use your real photograph in the future:
1. Save your photo in this folder as `avatar.jpg` or `profile.png`.
2. Open `index.html` and locate the `<div class="avatar-hologram">` inside `#home`:
   ```html
   <div class="avatar-hologram">
     <!-- Replace the icon below with your image tag: -->
     <img src="avatar.jpg" alt="Badri Puligilla" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
   </div>
   ```

### 4. Direct Form Submissions (Optional)
By default, the contact form validates visitor input and opens their default email program (Outlook, Gmail, Apple Mail, etc.) addressed to your college email: `26HEU08R160@mrdu.edu.in`.

If you prefer to receive form messages directly to your inbox without opening the email client:
1. Create a free account on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Get your form endpoint URL (e.g. `https://formspree.io/f/xyz...`).
3. Set `action="https://formspree.io/f/YOUR_ENDPOINT"` and `method="POST"` on `<form id="portfolio-contact-form">` in `index.html`.

---

## 🌐 Step-by-Step GitHub Pages Deployment Guide

Follow these steps to deploy your website live for recruiters, internship providers, and faculty:

### Step 1: Initialize Git in your project folder
Open PowerShell in `my portfolio`:
```powershell
git init
git add .
git commit -m "Initial commit: Badri Puligilla animated portfolio"
```

### Step 2: Create a new repository on GitHub
1. Go to [https://github.com/new](https://github.com/new).
2. Name the repository (for example: `portfolio` or `my-portfolio`).
3. Choose **Public**.
4. Leave "Add a README file" **unchecked** (we already created one).
5. Click **Create repository**.

### Step 3: Link and Push to GitHub
Run the following commands in your PowerShell (replace `YOUR-REPO-NAME` with your actual repo name):
```powershell
git branch -M main
git remote add origin https://github.com/puligillabadri13-ops/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 4: Enable GitHub Pages in Repository Settings
1. On your GitHub repository page, click the **Settings** tab (the gear icon on top).
2. On the left sidebar menu, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` from the dropdown and leave the folder as `/ (root)`.
4. Click **Save**.

### Step 5: View Your Live Website
- Wait 1 to 2 minutes for GitHub to finish the deployment workflow.
- Refresh the **Pages** page in Settings; a green banner will appear stating:
  > **"Your site is live at https://puligillabadri13-ops.github.io/YOUR-REPO-NAME/"**
- Click the link to view your live portfolio!

### Step 6: Updating Your Website in the Future
Whenever you update code or add projects:
```powershell
git add .
git commit -m "Update project links and skills"
git push
```
GitHub Pages will automatically rebuild and deploy your changes within 1-2 minutes.

---

## 🔍 Features & Verification Checklist

- [x] **Verified Personal Details**: Badri Puligilla, 1st-Year B.Tech CSE (DS), Malla Reddy Deemed to be University.
- [x] **Working Verified Links**: GitHub (`puligillabadri13-ops`), LinkedIn (`puligilla-badri-34a9a9416`), and Email (`26HEU08R160@mrdu.edu.in`).
- [x] **Futuristic Dark Aesthetics**: Deep navy backgrounds, neon cyan (`#00f0ff`) and purple (`#b026ff`) accents, ambient glow orbs, subtle particle mesh canvas.
- [x] **Typing Animation**: Seamless typewriter effect cycling through student-focused phrases.
- [x] **Mouse-Following Glow**: Hardware-accelerated radial light tracking the mouse pointer smoothly on desktop.
- [x] **Responsive Mobile Navigation**: Clean hamburger drawer menu with auto-closing on link selection.
- [x] **Safe Placeholder URLs**: "View Project" buttons protect against 404 broken pages if links are not yet deployed.
- [x] **Contact Form Handling**: Validates input and launches prefilled university email via `mailto:`, with copy-to-clipboard button.
- [x] **Accessibility**: Respects `prefers-reduced-motion`, semantic HTML5 hierarchy, high contrast text, and keyboard navigation.

---

## 📜 License
This project is open source and personal to Badri Puligilla. Feel free to use this template for your own developer portfolio.
