// Reusable HTML Components

const Components = {
    // Navigation bar component
    navbar: (currentPage = '') => {
        const navItems = [
            { href: 'index.html#features', text: 'Features' },
            { href: 'index.html#how-it-works', text: 'How It Works' },
            { href: 'index.html#pricing', text: 'Pilot Program' },
            { href: 'about.html', text: 'About' },
            { href: 'careers.html', text: 'Careers' }
        ];

        const ctaButton = currentPage === 'contact.html' 
            ? { href: 'contact.html', text: 'Contact Us' }
            : { href: 'contact.html', text: 'Apply Now' };

        return `
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <a href="index.html"><img src="assets/nuggy_logo_nobg.svg" alt="Nuggy Logo" class="logo-img"></a>
                </div>
                <ul class="nav-links">
                    ${navItems.map(item => `
                        <li><a href="${item.href}">${item.text}</a></li>
                    `).join('')}
                    <li><a href="${ctaButton.href}" class="cta-button"><span>${ctaButton.text}</span></a></li>
                </ul>
                <div class="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>`;
    },

    // Footer component
    footer: () => {
        return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="assets/nuggy_logo_nobg.svg" alt="Nuggy Logo" class="logo-img">
                    <p>Your Personal Pricing Buddy</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="index.html#features">Features</a></li>
                            <li><a href="index.html#pricing">Pricing</a></li>
                            <li><a href="index.html#how-it-works">How It Works</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:info@nuggy.io">info@nuggy.io</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/nuggypricing/">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Nuggy. All rights reserved.</p>
            </div>
        </div>
    </footer>`;
    },

    // Head meta tags and links
    headContent: (title = 'Nuggy - Your Personal Pricing Buddy', additionalStyles = []) => {
        const stylesheets = ['css/styles.css', ...additionalStyles];
        
        return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="icon" type="image/x-icon" href="assets/nuggy_logo_nobg.ico">
    ${stylesheets.map(style => `<link rel="stylesheet" href="${style}">`).join('\n    ')}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Nunito:wght@700,800,900&family=IBM+Plex+Mono:wght@400;500;600&family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">`;
    },

    // Script includes
    scripts: (additionalScripts = []) => {
        const scripts = ['js/components.js', 'js/script.js', ...additionalScripts];
        
        return scripts.map(script => `<script src="${script}"></script>`).join('\n    ');
    }
};

// Function to render components when DOM is loaded
function renderComponents() {
    // Get the current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Render navbar if placeholder exists
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.outerHTML = Components.navbar(currentPage);
    }
    
    // Render footer if placeholder exists
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = Components.footer();
    }
}

// Auto-render on DOM content loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderComponents);
} else {
    renderComponents();
}