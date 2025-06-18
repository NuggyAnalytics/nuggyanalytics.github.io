// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Enhanced navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 300) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handling with modern animation
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Create mailto link with subject and body
        const subject = encodeURIComponent('Pilot Program Application - Nuggy');
        const body = encodeURIComponent(`Hello Nuggy Team,\n\nI'm interested in joining your pilot program.\n\nEmail: ${email}\n\nLooking forward to hearing from you!\n\nBest regards`);
        window.location.href = `mailto:info@nuggy.io?subject=${subject}&body=${body}`;
        
        // Show success message with animation
        const button = e.target.querySelector('button');
        const originalContent = button.innerHTML;
        button.innerHTML = '<span>Application Sent!</span> <span class="btn-arrow">✓</span>';
        button.style.background = 'var(--highlight-lime)';
        button.style.color = 'var(--graphite-ink)';
        
        // Add success animation
        button.classList.add('success-animation');
        
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.style.background = '';
            button.style.color = '';
            button.classList.remove('success-animation');
            e.target.reset();
        }, 3000);
    });
}

// Enhanced intersection observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Add stagger effect for children
            const children = entry.target.querySelectorAll('[data-delay]');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('revealed');
                }, parseInt(child.dataset.delay) || index * 100);
            });
        }
    });
}, observerOptions);

// Observe reveal elements
document.querySelectorAll('.reveal-fade, .reveal-slide, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
});

// Also observe photo cards
document.querySelectorAll('.photo-card').forEach(el => {
    revealObserver.observe(el);
});

// Parallax effect for floating elements
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

// Metric card animations
const metricCards = document.querySelectorAll('.metric-card.floating');
metricCards.forEach((card, index) => {
    const delay = card.dataset.delay || index * 200;
    card.style.animationDelay = `${delay}ms`;
});

// Button hover effects enhancement
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transition = 'width 0.6s, height 0.6s';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Handle "See How It Works" button
const howItWorksBtn = document.querySelector('.btn-secondary');
if (howItWorksBtn && howItWorksBtn.textContent === 'See How It Works') {
    howItWorksBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#how-it-works').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Join the Pilot button
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

// Animate metric values with counting effect
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

// Observe metric cards for animation
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

// Process step animations
document.querySelectorAll('.process-step').forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        step.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
    }, 100 + index * 200);
});

// Bar chart animation for config visualization
const configBars = document.querySelectorAll('.bar');
configBars.forEach((bar, index) => {
    bar.style.setProperty('--i', index);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger logo animation
    const heroLogo = document.querySelector('.hero-logo-img');
    if (heroLogo) {
        heroLogo.classList.add('animate');
    }
});

// Add smooth fade-in for sections
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    if (!section.classList.contains('hero')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(section);
    }
});

// Add success animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .success-animation {
        animation: successPulse 0.6s ease-out;
    }
    
    body.loaded {
        overflow-x: hidden;
    }
    
    /* Ripple effect */
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);