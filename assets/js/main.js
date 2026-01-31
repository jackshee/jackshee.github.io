// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }
    
    // Close menu on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});

// Sticky Header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    
    if (header && header.classList.contains('transparent')) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    if (!themeToggle) return;
    
    // Get saved theme or default
    const savedTheme = localStorage.getItem('theme') || 'auto';
    applyTheme(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme') || 'auto';
        let newTheme;
        
        if (currentTheme === 'auto') {
            newTheme = 'dark';
        } else if (currentTheme === 'dark') {
            newTheme = 'light';
        } else {
            newTheme = 'auto';
        }
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    function applyTheme(theme) {
        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            updateIcon('auto');
        } else {
            html.setAttribute('data-theme', theme);
            updateIcon(theme);
        }
    }
    
    function updateIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                icon.classList.remove('fa-regular', 'fa-moon');
                icon.classList.add('fa-solid', 'fa-sun');
            } else {
                icon.classList.remove('fa-solid', 'fa-sun');
                icon.classList.add('fa-regular', 'fa-moon');
            }
        }
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        const savedTheme = localStorage.getItem('theme') || 'auto';
        if (savedTheme === 'auto') {
            applyTheme('auto');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


