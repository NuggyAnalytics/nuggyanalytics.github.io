// Main application file that initializes everything

// Load components and common functionality
document.addEventListener('DOMContentLoaded', function() {
    // The components.js file will auto-render navbar and footer
    // The common.js file will initialize all common functionality
    
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
            initHomePage();
            break;
        case 'careers.html':
            initCareersPage();
            break;
        case 'contact.html':
            initContactPage();
            break;
        case 'about.html':
            initAboutPage();
            break;
    }
});

// Home page specific functionality
function initHomePage() {
    // Email form handling
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            
            const subject = encodeURIComponent('Pilot Program Application - Nuggy');
            const body = encodeURIComponent(`Hello Nuggy Team,\n\nI'm interested in joining your pilot program.\n\nEmail: ${email}\n\nLooking forward to hearing from you!\n\nBest regards`);
            window.location.href = `mailto:info@nuggy.io?subject=${subject}&body=${body}`;
            
            // Show success message
            const button = e.target.querySelector('button');
            const originalContent = button.innerHTML;
            button.innerHTML = '<span>Application Sent!</span> <span class="btn-arrow">✓</span>';
            button.style.background = 'var(--highlight-lime)';
            button.style.color = 'var(--graphite-ink)';
            
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.style.background = '';
                button.style.color = '';
                e.target.reset();
            }, 3000);
        });
    }

    // Hero button handlers
    const howItWorksBtn = document.querySelector('.btn-secondary');
    if (howItWorksBtn && howItWorksBtn.textContent.includes('See How It Works')) {
        howItWorksBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#how-it-works').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    const joinPilotBtn = document.querySelector('.glitch-btn');
    if (joinPilotBtn) {
        joinPilotBtn.addEventListener('click', function(e) {
            if (this.querySelector('span').textContent === 'Join the Pilot') {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Animate metrics
    animateMetrics();
    
    // Parallax effects
    initParallaxEffects();
}

// Careers page specific functionality
function initCareersPage() {
    // Job application buttons
    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', function() {
            const position = this.getAttribute('data-position');
            const subject = encodeURIComponent(`Application: ${position} - Nuggy`);
            const body = encodeURIComponent(`Hello Nuggy Team,\n\nI'm interested in applying for the ${position} position.\n\n[Please attach your resume and portfolio/relevant work samples]\n\nBest regards`);
            window.location.href = `mailto:info@nuggy.io?subject=${subject}&body=${body}`;
        });
    });
    
    // Notify buttons
    document.querySelectorAll('.notify-btn').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    });
}

// Contact page specific functionality
function initContactPage() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const type = formData.get('type');
            const message = formData.get('message');
            
            const subject = encodeURIComponent(`${type} - Nuggy Contact Form`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`);
            
            window.location.href = `mailto:info@nuggy.io?subject=${subject}&body=${body}`;
            
            // Show success message
            const button = e.target.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Message Sent! ✓';
            button.style.background = 'var(--highlight-lime)';
            button.style.color = 'var(--graphite-ink)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.style.color = '';
                e.target.reset();
            }, 3000);
        });
    }
}

// About page specific functionality
function initAboutPage() {
    // Any about page specific code
}

// Animate metric values
function animateMetrics() {
    const animateValue = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('%')) {
                element.textContent = `+${Math.round(current)}%`;
            } else if (element.textContent.includes('+')) {
                element.textContent = `${Math.round(current)}+`;
            } else {
                element.textContent = current.toString();
            }
        }, 16);
    };

    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const valueElement = entry.target.querySelector('.metric-value');
                if (valueElement) {
                    const text = valueElement.textContent;
                    if (text.includes('%')) {
                        animateValue(valueElement, 0, 21, 1000);
                    } else if (text === '500+') {
                        animateValue(valueElement, 0, 500, 1000);
                        setTimeout(() => {
                            valueElement.textContent = '500+';
                        }, 1000);
                    }
                }
                metricObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.metric-card').forEach(card => {
        metricObserver.observe(card);
    });
}

// Parallax effects for floating elements
function initParallaxEffects() {
    window.addEventListener('mousemove', (e) => {
        const floatingElements = document.querySelectorAll('.float-element');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        floatingElements.forEach((el, index) => {
            const speed = parseFloat(el.dataset.speed) || 0.5;
            const xOffset = (x - 0.5) * 100 * speed;
            const yOffset = (y - 0.5) * 100 * speed;
            
            el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}