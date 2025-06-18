# Nuggy Website - Project Structure

## Folder Organization

```
webpage/
├── index.html          # Homepage
├── about.html          # About page
├── careers.html        # Careers page
├── contact.html        # Contact page
├── CNAME              # GitHub Pages domain
├── README.md          # Project overview
├── CLAUDE.md          # Claude AI instructions
│
├── assets/            # Images and media files
│   ├── nuggy_logo_nobg.svg
│   └── nuggy_logo_nobg.ico
│
├── css/               # Stylesheets
│   ├── styles.css     # Main styles
│   └── careers-styles.css  # Careers page specific styles
│
├── js/                # JavaScript files
│   ├── components.js  # Reusable HTML components
│   ├── common.js      # Shared functionality
│   ├── app.js         # Page-specific logic
│   └── script.js      # Legacy script (can be phased out)
│
├── templates/         # HTML templates
│   └── template.html  # Basic page template
│
└── docs/              # Documentation
    ├── README_REFACTOR.md     # Refactoring documentation
    ├── build.js               # Build script for static generation
    └── PROJECT_STRUCTURE.md   # This file
```

## Benefits of This Structure

1. **Organized**: Files are grouped by type and purpose
2. **Scalable**: Easy to add new files in appropriate folders
3. **Maintainable**: Clear separation of concerns
4. **Standard**: Follows common web project conventions

## Adding New Files

- HTML pages: Place in root directory
- Images/Icons: Place in `assets/`
- Stylesheets: Place in `css/`
- JavaScript: Place in `js/`
- Documentation: Place in `docs/`
- Templates: Place in `templates/`