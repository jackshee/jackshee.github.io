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
    
    // Click handler - clicking anywhere on the toggle switches theme
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
            const actualTheme = prefersDark ? 'dark' : 'light';
            html.setAttribute('data-theme', actualTheme);
            updateToggle(actualTheme);
        } else {
            html.setAttribute('data-theme', theme);
            updateToggle(theme);
        }
    }
    
    function updateToggle(theme) {
        // Update the toggle button's data-theme attribute for CSS styling
        // This controls the visual state: dark = circle left + sun, light = moon + circle right
        if (theme === 'dark') {
            themeToggle.setAttribute('data-theme', 'dark');
        } else {
            themeToggle.removeAttribute('data-theme');
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

// Cellular Automaton Simulation
document.addEventListener('DOMContentLoaded', function() {
    // Find all hero sections with cellular automaton canvases
    const heroSections = document.querySelectorAll('.hero-section');
    
    heroSections.forEach(function(heroSection) {
        const canvas = heroSection.querySelector('.cellular-automaton-canvas');
        const ruleInput = heroSection.querySelector('.automaton-rule-input');
        
        if (!canvas || !ruleInput) return;
        
        const ctx = canvas.getContext('2d');
        let animationId = null;
        let currentRule = parseInt(ruleInput.value) || 30;
        let cellSize = 4; // Size of each cell in pixels
        let grid = [];
        let generation = 0;
        let maxGenerations = 0;
        
        // Initialize canvas size
        function resizeCanvas() {
            const rect = heroSection.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            maxGenerations = Math.floor(canvas.height / cellSize);
            initGrid();
        }
        
        // Initialize the grid with a single active cell in the center
        function initGrid() {
            const width = Math.floor(canvas.width / cellSize);
            grid = [];
            const firstRow = new Array(width).fill(0);
            firstRow[Math.floor(width / 2)] = 1; // Single active cell in center
            grid.push(firstRow);
            generation = 0;
        }
        
        // Get the rule pattern for a given rule number (0-255)
        function getRulePattern(rule) {
            const pattern = [];
            for (let i = 0; i < 8; i++) {
                pattern[i] = (rule >> i) & 1;
            }
            return pattern;
        }
        
        // Get the next generation based on the rule
        function getNextGeneration(currentRow, rulePattern) {
            const width = currentRow.length;
            const nextRow = new Array(width).fill(0);
            
            for (let i = 0; i < width; i++) {
                // Get the three cells (left, center, right) with wrapping
                const left = currentRow[(i - 1 + width) % width];
                const center = currentRow[i];
                const right = currentRow[(i + 1) % width];
                
                // Convert to pattern index (0-7)
                const patternIndex = (left << 2) | (center << 1) | right;
                
                // Apply the rule
                nextRow[i] = rulePattern[patternIndex];
            }
            
            return nextRow;
        }
        
        // Draw the grid on the canvas
        function drawGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const width = Math.floor(canvas.width / cellSize);
            const height = Math.min(grid.length, maxGenerations);
            
            // Determine cell color based on theme (swapped again)
            const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
            const cellColor = isDarkMode 
                ? 'rgba(97, 207, 90, 0.6)'  // Accent color for dark mode (swapped)
                : 'rgba(255, 255, 255, 0.8)';  // White for light mode (swapped)
            
            // Draw each generation
            for (let gen = 0; gen < height; gen++) {
                const row = grid[gen];
                if (!row) continue;
                
                for (let x = 0; x < width && x < row.length; x++) {
                    if (row[x] === 1) {
                        ctx.fillStyle = cellColor;
                        ctx.fillRect(x * cellSize, gen * cellSize, cellSize, cellSize);
                    }
                }
            }
        }
        
        // Animate the cellular automaton
        function animate() {
            if (generation < maxGenerations) {
                const rulePattern = getRulePattern(currentRule);
                const lastRow = grid[grid.length - 1];
                const nextRow = getNextGeneration(lastRow, rulePattern);
                grid.push(nextRow);
                generation++;
            } else {
                // Reset when we reach the bottom
                initGrid();
            }
            
            drawGrid();
            animationId = requestAnimationFrame(animate);
        }
        
        // Handle rule input changes
        ruleInput.addEventListener('input', function() {
            let rule = parseInt(this.value) || 30;
            rule = Math.max(0, Math.min(255, rule)); // Clamp between 0 and 255
            this.value = rule;
            currentRule = rule;
            initGrid();
        });
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 100);
        });
        
        // Initialize and start
        resizeCanvas();
        animate();
        
        // Listen for theme changes and redraw
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    drawGrid();  // Redraw with new theme colors
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', function() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            observer.disconnect();
        });
    });
});


