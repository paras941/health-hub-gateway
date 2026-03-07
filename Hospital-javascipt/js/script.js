/* ============================================
   SCRIPT.JS - Interactive Features & Animations
   CityCare Hospital Website
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // PRELOADER
    // ============================================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Trigger initial animations after preloader
            document.body.classList.add('loaded');
        }, 500);
    });
    
    // Fallback: Hide preloader after 3 seconds max
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }, 3000);

    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // ============================================
    // HEADER SCROLL EFFECTS
    // ============================================
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        // Add scrolled class for shadow
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (mobile only)
        if (window.innerWidth <= 991) {
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        const scrollY = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            
            if (navLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink, { passive: true });

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = document.querySelectorAll('.reveal');
    
    function onIntersect(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay for elements with data-stagger
                if (entry.target.hasAttribute('data-stagger')) {
                    const parent = entry.target.parentElement;
                    const siblings = Array.from(parent.querySelectorAll('[data-stagger]'));
                    const idx = siblings.indexOf(entry.target);
                    entry.target.style.setProperty('--stagger-delay', `${idx * 100}ms`);
                }
                
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }
    
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(onIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        });
        
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for reduced motion or no IntersectionObserver
        revealElements.forEach(el => el.classList.add('in-view'));
    }

    // ============================================
    // ANIMATED COUNTERS
    // ============================================
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'), 10);
        if (!target || element.classList.contains('counted')) return;
        
        element.classList.add('counted');
        
        const duration = 2000;
        const start = performance.now();
        const startValue = 0;
        
        function formatNumber(num) {
            return num.toLocaleString();
        }
        
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }
        
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.round(startValue + (target - startValue) * easedProgress);
            
            element.textContent = formatNumber(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }
        
        requestAnimationFrame(tick);
    }
    
    // Observe counter elements
    const counterElements = document.querySelectorAll('[data-count]');
    
    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterElements.forEach(el => counterObserver.observe(el));
    } else {
        counterElements.forEach(el => animateCounter(el));
    }

    // ============================================
    // MODAL FUNCTIONALITY
    // ============================================
    const modal = document.getElementById('appointmentModal');
    const openModalBtns = document.querySelectorAll('#openModal, #heroOpenModal');
    const closeModalBtn = document.querySelector('.close');
    
    function openModal() {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 300);
    }
    
    function closeModal() {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
    
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // ============================================
    // FORM VALIDATION & SUBMISSION
    // ============================================
    const appointmentForm = document.getElementById('appointmentForm');
    const inlineForm = document.getElementById('appointmentFormInline');
    const toast = document.getElementById('toast');
    
    function showToast(message, isError = false) {
        const toastMessage = toast.querySelector('.toast-message');
        const toastIcon = toast.querySelector('i');
        
        toastMessage.textContent = message;
        toast.classList.toggle('error', isError);
        toastIcon.className = isError ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-circle-check';
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
    
    function validateForm(form) {
        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const phone = form.querySelector('input[type="tel"]');
        
        if (name && name.value.length < 3) {
            showToast('Please enter a valid name (at least 3 characters)', true);
            name.focus();
            return false;
        }
        
        if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showToast('Please enter a valid email address', true);
            email.focus();
            return false;
        }
        
        if (phone && phone.value.replace(/\D/g, '').length < 10) {
            showToast('Please enter a valid phone number', true);
            phone.focus();
            return false;
        }
        
        return true;
    }
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        if (!validateForm(e.target)) return;
        
        // Simulate form submission
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            showToast('Appointment booked successfully! We will contact you soon.');
            
            e.target.reset();
            
            if (modal.classList.contains('is-open')) {
                closeModal();
            }
        }, 1500);
    }
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (inlineForm) {
        inlineForm.addEventListener('submit', handleFormSubmit);
    }

    // ============================================
    // NEWSLETTER FORM
    // ============================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]');
            
            if (email && email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                showToast('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } else {
                showToast('Please enter a valid email address', true);
            }
        });
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTopBtn = document.getElementById('backToTop');
    
    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // CARD HOVER GLOW EFFECT
    // ============================================
    const glowCards = document.querySelectorAll('.service-card, .doctor-card, .contact-card, .testimonial-card');
    
    glowCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');
    
    if (!prefersReducedMotion && hero) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = hero.offsetHeight;
            
            if (scrollY < heroHeight) {
                shapes.forEach((shape, index) => {
                    const speed = 0.1 + (index * 0.05);
                    shape.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
        }, { passive: true });
    }

    // ============================================
    // TYPING EFFECT (Optional Enhancement)
    // ============================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // ============================================
    // SET MINIMUM DATE FOR APPOINTMENT
    // ============================================
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });

    // ============================================
    // IMAGE LAZY LOADING ENHANCEMENT
    // ============================================
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENT
    // ============================================
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    // Trap focus in modal when open
    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        const focusable = modal.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });

    // ============================================
    // PRINT PAGE FUNCTIONALITY
    // ============================================
    const printBtn = document.querySelector('.print-page');
    
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }

    // ============================================
    // INITIALIZE AOS-LIKE ANIMATIONS
    // ============================================
    function initAnimations() {
        // Trigger hero animations immediately
        setTimeout(() => {
            document.querySelectorAll('.hero .reveal').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('in-view');
                }, index * 150);
            });
        }, 500);
    }
    
    initAnimations();

    // ============================================
    // PERFORMANCE: DEBOUNCE RESIZE EVENTS
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Handle resize events
    const handleResize = debounce(() => {
        // Reset mobile menu on resize to desktop
        if (window.innerWidth > 991 && nav.classList.contains('active')) {
            toggleMenu();
        }
    }, 250);
    
    window.addEventListener('resize', handleResize);

    // ============================================
    // SERVICE WORKER REGISTRATION (PWA Support)
    // ============================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered'))
            //     .catch(error => console.log('SW registration failed'));
        });
    }

    // Log initialization
    console.log('🏥 CityCare Hospital website initialized successfully!');
});
