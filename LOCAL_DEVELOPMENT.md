# Local Development Guide

This guide explains how to run the Nuggy website locally and deploy it to GitHub Pages.

## Prerequisites

- Python 3.x (for Python server)
- Node.js and npm (optional, for npm server)
- Git

## Running Locally

### Option 1: Python HTTP Server (Recommended)

```bash
# Navigate to the project directory
cd /path/to/webpage

# Run the custom Python server
python3 serve.py

# Or use Python's built-in server
python3 -m http.server 8080
```

The site will be available at http://localhost:8080

### Option 2: Using npm

```bash
# Install dependencies (first time only)
npm install

# Run the server
npm start
# or
npm run serve
```

### Option 3: Using any HTTP server

You can use any static file server. The site is purely static HTML/CSS/JS.

## GitHub Pages Deployment

### Setup

1. Push your code to a GitHub repository
2. Go to Settings > Pages in your repository
3. Under "Source", select "Deploy from a branch"
4. Choose your branch (usually `main`) and `/` (root) folder
5. Click Save

### Custom Domain (if using nuggyanalytics.com)

1. Ensure the `CNAME` file contains your domain: `nuggyanalytics.com`
2. Add these DNS records to your domain:
   - A record pointing to: 185.199.108.153
   - A record pointing to: 185.199.109.153
   - A record pointing to: 185.199.110.153
   - A record pointing to: 185.199.111.153
   - CNAME record for www pointing to: nuggyanalytics.github.io

### Important Notes for GitHub Pages

- All paths must be relative (no leading `/`)
- The site is served from the repository root
- `_config.yml` excludes unnecessary files from deployment
- GitHub Pages automatically serves `index.html` as the default page

## File Structure

```
webpage/
├── index.html          # Homepage
├── about.html          # About page
├── blog.html           # Blog listing
├── careers.html        # Careers page
├── contact.html        # Contact page
├── faq.html           # FAQ page
├── assets/            # Images and icons
├── css/               # Stylesheets
├── js/                # JavaScript files
├── blog_posts/        # Individual blog posts
├── CNAME              # Custom domain configuration
├── _config.yml        # GitHub Pages configuration
└── serve.py           # Local development server
```

## Testing Checklist

Before deploying, ensure:

- [ ] All links work correctly
- [ ] Images load properly
- [ ] JavaScript functions work (especially the carousel)
- [ ] Forms redirect properly
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools

## Troubleshooting

### Images not loading
- Check that paths are relative: `assets/image.png` not `/assets/image.png`

### JavaScript not working
- Ensure script paths are relative: `js/script.js` not `/js/script.js`
- Check browser console for errors

### Styles not applying
- Verify CSS paths are relative: `css/styles.css` not `/css/styles.css`

### 404 errors on GitHub Pages
- Wait a few minutes after deployment for changes to propagate
- Check that the branch and folder settings are correct in GitHub Pages settings

## Carousel Testing

The features carousel should:
- Scroll smoothly when clicking navigation buttons
- Show disabled state for navigation buttons at start/end
- Be swipeable on touch devices
- Snap to cards when scrolling
- Work with keyboard navigation (arrow keys)