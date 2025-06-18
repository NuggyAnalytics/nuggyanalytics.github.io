// Build script to generate static HTML files with components
const fs = require('fs');
const path = require('path');

// Load components
const componentsCode = fs.readFileSync('components.js', 'utf8');
const Components = eval(componentsCode + '; Components;');

// Configuration for each page
const pages = [
    {
        template: 'index-template.html',
        output: 'index.html',
        title: 'Nuggy - Your Personal Pricing Buddy',
        styles: []
    },
    {
        template: 'about-template.html',
        output: 'about.html',
        title: 'About - Nuggy',
        styles: []
    },
    {
        template: 'careers-template.html',
        output: 'careers.html',
        title: 'Careers - Nuggy',
        styles: ['careers-styles.css']
    },
    {
        template: 'contact-template.html',
        output: 'contact.html',
        title: 'Contact - Nuggy',
        styles: []
    }
];

// Function to build a page
function buildPage(config) {
    try {
        // Read template
        let html = fs.readFileSync(config.template, 'utf8');
        
        // Replace placeholders
        html = html.replace('<!-- NAVBAR -->', Components.navbar(config.output));
        html = html.replace('<!-- FOOTER -->', Components.footer());
        html = html.replace('<!-- HEAD -->', Components.headContent(config.title, config.styles));
        html = html.replace('<!-- SCRIPTS -->', Components.scripts());
        
        // Write output
        fs.writeFileSync(config.output, html);
        console.log(`✓ Built ${config.output}`);
    } catch (error) {
        console.error(`✗ Error building ${config.output}:`, error.message);
    }
}

// Build all pages
console.log('Building static HTML files...\n');
pages.forEach(buildPage);
console.log('\nBuild complete!');

// Create package.json if it doesn't exist
const packageJson = {
    name: "nuggy-website",
    version: "1.0.0",
    description: "Nuggy - Your Personal Pricing Buddy",
    scripts: {
        "build": "node build.js",
        "serve": "python3 -m http.server 8000"
    }
};

if (!fs.existsSync('package.json')) {
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    console.log('\n✓ Created package.json');
}