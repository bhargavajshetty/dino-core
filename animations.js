/* ═══════════════════════════════════════════════════════════
   DINO.CORE — Shared Animations & Interactive Effects
   ═══════════════════════════════════════════════════════════ */

// ── Scroll Reveal Observer ──
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Don't unobserve so re-entry still works
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

// ── Stagger Children Animation ──
function initStaggerCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('.stagger-card');
                children.forEach((child, i) => {
                    child.style.transitionDelay = (i * 0.1) + 's';
                    child.classList.add('revealed');
                });
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.stagger-container').forEach(el => {
        observer.observe(el);
    });
}

// ── Parallax Background ──
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    if (parallaxElements.length === 0) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.dataset.speed) || 0.3;
                    el.style.transform = `translateY(${scrollY * speed}px) scale(1.1)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ── Floating Particles ──
function initParticles(containerId, count = 30) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.4 + 0.1;

        // Random green/amber tint
        const colors = [
            'rgba(139, 215, 155, 0.3)',
            'rgba(255, 185, 95, 0.2)',
            'rgba(110, 231, 183, 0.25)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ── Typing Animation ──
function initTypingEffect(elementId, text, speed = 50) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.textContent = '';
    el.classList.add('typing-cursor');
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => el.classList.remove('typing-cursor'), 1500);
        }
    }

    // Start typing when element scrolls into view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            type();
            observer.disconnect();
        }
    });
    observer.observe(el);
}

// ── Smooth Image Loading ──
function initSmoothImages() {
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.classList.add('img-smooth');
            img.addEventListener('load', () => img.classList.add('loaded'));
            img.addEventListener('error', () => {
                img.classList.add('loaded');
                // Set fallback gradient for broken images
                img.style.background = 'linear-gradient(135deg, #131b2e, #1a2332)';
            });
        }
    });
}

// ── Counter / Count Up Animation ──
function animateCounter(element, target, duration = 1500) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(start + (target - start) * eased);
        element.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

// ── Danger Level Color ──
function getDangerColor(level) {
    if (level <= 3) return '#22c55e';
    if (level <= 5) return '#eab308';
    if (level <= 7) return '#f97316';
    return '#ef4444';
}

// ── Danger Level Label ──
function getDangerLabel(level) {
    if (level <= 2) return 'Docile';
    if (level <= 4) return 'Cautious';
    if (level <= 6) return 'Dangerous';
    if (level <= 8) return 'Very Dangerous';
    return 'APEX PREDATOR';
}

// ── Initialize All ──
function initAllAnimations() {
    initScrollReveal();
    initStaggerCards();
    initParallax();
    initSmoothImages();
}

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', initAllAnimations);
