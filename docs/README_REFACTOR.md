# Nuggy Website - Refactored Architecture

## Overview
The website has been refactored to use a modular component system that prevents code duplication and makes maintenance easier.

## File Structure

### Core JavaScript Files
- **components.js** - Contains reusable HTML components (navbar, footer, head content)
- **common.js** - Common functionality shared across all pages (mobile menu, smooth scrolling, animations)
- **app.js** - Main application file with page-specific functionality
- **script.js** - Legacy script file (can be gradually phased out)

### CSS Files
- **styles.css** - Main stylesheet with all common styles
- **careers-styles.css** - Additional styles specific to careers page

### HTML Structure
All HTML files now use a simplified structure with component placeholders:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard meta tags and styles -->
</head>
<body>
    <!-- Navbar placeholder -->
    <div id="navbar-placeholder"></div>

    <!-- Page content -->
    <section>
        <!-- Your page-specific content -->
    </section>

    <!-- Footer placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="components.js"></script>
    <script src="common.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

## How It Works

1. **Component Injection**: When the page loads, `components.js` automatically finds the navbar and footer placeholders and replaces them with the actual HTML.

2. **Common Functionality**: `common.js` initializes features used across all pages:
   - Mobile menu toggle
   - Smooth scrolling
   - Navbar scroll effects
   - Reveal animations
   - Button effects

3. **Page-Specific Code**: `app.js` detects which page is loaded and runs appropriate initialization functions.

## Benefits

1. **No Duplication**: Navbar and footer are defined once in `components.js`
2. **Easy Updates**: Change the component once, updates everywhere
3. **Maintainable**: Clear separation of concerns
4. **No Build Step**: Works directly in the browser, no Node.js required

## Adding New Pages

To add a new page:

1. Create your HTML file using the template structure
2. Add navbar and footer placeholders
3. Include the three core JavaScript files
4. Add page-specific functionality to `app.js` if needed

## Future Improvements

1. **CSS Modules**: Break CSS into component-specific files
2. **Build System**: Optional build step to pre-render components for better SEO
3. **TypeScript**: Add type safety to JavaScript code
4. **Testing**: Add unit tests for components and functionality

## Development

To run the website locally:
```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.