/* =============================================
   FRONTEND JAVASCRIPT - CAPTEX COMPANY
   ============================================= */

// ====== NAVBAR SCROLL ======
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const floatingCta = document.getElementById('floatingCta');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Navbar shadow on scroll
  if (scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Scroll to top button
  if (scrollY > 400) {
    scrollTopBtn.classList.add('visible');
    floatingCta.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
    floatingCta.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== HAMBURGER MENU ======
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    document.querySelectorAll('.nav-item.has-dropdown').forEach(el => {
      el.classList.remove('open');
    });
  }
});

// Mobile dropdown toggle
document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const item = link.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.has-dropdown').forEach(el => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }
  });
});

// Close mobile menu on nav link click (non-dropdown)
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ====== SMOOTH SCROLL FOR ANCHORS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// ====== FAQ ACCORDION ======
function toggleFAQ(questionEl) {
  const faqItem = questionEl.parentElement;
  const isActive = faqItem.classList.contains('active');

  // Close all
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  // Open clicked if was closed
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// ====== FORM VALIDATION & SUBMISSION ======
const leadForm = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const submitLoader = document.getElementById('submitLoader');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

function showError(fieldId, msg) {
  const el = document.getElementById(fieldId);
  if (el) el.textContent = msg;
}

function clearErrors() {
  ['nameError', 'emailError', 'phoneError'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
}

function validateForm(data) {
  let valid = true;
  clearErrors();

  if (!data.fullName || data.fullName.trim().length < 2) {
    showError('nameError', 'Please enter your full name (at least 2 characters)');
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    showError('emailError', 'Please enter a valid email address');
    valid = false;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanPhone = (data.phone || '').replace(/[\s\-\+]/g, '');
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    showError('phoneError', 'Please enter a valid 10-digit Indian mobile number');
    valid = false;
  }

  return valid;
}

if (leadForm) {
  leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formSuccess.style.display = 'none';
    formError.style.display = 'none';

    const data = {
      fullName: document.getElementById('fullName')?.value.trim(),
      email: document.getElementById('email')?.value.trim(),
      phone: document.getElementById('phone')?.value.trim(),
      city: document.getElementById('city')?.value.trim(),
      message: document.getElementById('message')?.value.trim(),
      service: 'LLP ROC Compliance AMC',
      timestamp: new Date().toISOString()
    };

    if (!validateForm(data)) return;

    // Show loading state
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline-flex';
    submitBtn.disabled = true;

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        formSuccess.style.display = 'block';
        leadForm.reset();
        clearErrors();

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const errData = await response.json().catch(() => ({}));
        formError.style.display = 'block';
        formError.querySelector('p').textContent = errData.message || 'Something went wrong. Please try again.';
      }
    } catch (err) {
      // If backend not running, show a friendly message
      if (err.message.includes('fetch') || err.name === 'TypeError') {
        // Store locally as fallback
        storeLeadLocally(data);
        formSuccess.style.display = 'block';
        leadForm.reset();
        clearErrors();
      } else {
        formError.style.display = 'block';
      }
    } finally {
      submitText.style.display = 'inline-flex';
      submitLoader.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
}

// Local storage fallback for lead data
function storeLeadLocally(data) {
  try {
    const leads = JSON.parse(localStorage.getItem('captex_leads') || '[]');
    leads.push(data);
    localStorage.setItem('captex_leads', JSON.stringify(leads));
  } catch (e) {
    console.warn('Could not store lead locally:', e);
  }
}

// ====== SCROLL ANIMATION ======
const animateElements = document.querySelectorAll(
  '.step-card, .compliance-card, .penalty-card, .why-card, .roc-category, ' +
  '.exemption-card, .testimonial-card, .faq-item, .stat-item'
);

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animated');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ====== COUNTER ANIMATION ======
function animateCounter(el, target, prefix = '', suffix = '') {
  const duration = 2000;
  const steps = 60;
  const stepDuration = duration / steps;
  let current = 0;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, stepDuration);
}

// Observe stat items for counter animation
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const strong = entry.target.querySelector('strong');
      if (strong && !strong.dataset.animated) {
        strong.dataset.animated = 'true';
        const text = strong.textContent;
        const num = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[0-9.,]/g, '').trim();
        if (!isNaN(num) && num > 0) {
          animateCounter(strong, num, '', suffix);
        }
      }
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-item').forEach(el => statObserver.observe(el));

// ====== STICKY FLOATING CTA VISIBILITY ======
window.addEventListener('scroll', () => {
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      floatingCta.classList.add('visible');
    } else {
      floatingCta.classList.remove('visible');
    }
  }
});

// ====== TYPING EFFECT FOR HERO TITLE ======
// (Simple entrance animation via CSS - already handled)

// ====== ACTIVE NAV HIGHLIGHT ON SCROLL ======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ====== TESTIMONIAL CAROUSEL (MOBILE) ======
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
  if (window.innerWidth > 768) return;
  testimonialCards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

// Auto-advance testimonials on mobile
setInterval(() => {
  if (window.innerWidth <= 768 && testimonialCards.length > 0) {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  }
}, 4000);

// ====== PHONE NUMBER FORMATTING ======
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 10) val = val.slice(0, 10);
    e.target.value = val;
  });
}

// ====== CONSOLE WELCOME MESSAGE ======
console.log(
  '%c Captex Company %c LLP ROC Compliance Portal ',
  'background: #4F46E5; color: white; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;',
  'background: #06B6D4; color: white; padding: 4px 8px; border-radius: 0 4px 4px 0;'
);
