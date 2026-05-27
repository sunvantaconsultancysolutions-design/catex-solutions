/**
 * Catax Solutions Private Limited — SHARED COMPONENTS
 * Injects consistent Navbar and Footer across all pages
 */

(function () {
  const NAV_HTML = `
  <nav id="navbar" class="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <div class="logo-icon"><i class="fas fa-balance-scale"></i></div>
        <span class="logo-text">Catax Solutions Private Limited<span class="logo-accent"></span></span>
      </a>
      <ul class="nav-menu" id="navMenu">
        <li class="nav-item has-dropdown">
          <a href="#" class="nav-link">Start Business <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="private-limited.html"><i class="fas fa-building"></i> Private Limited Company</a>
            <a href="opc.html"><i class="fas fa-user-tie"></i> One Person Company</a>
            <a href="llp.html"><i class="fas fa-handshake"></i> Limited Liability Partnership</a>
            <a href="startup.html"><i class="fas fa-rocket"></i> Startup Incorporation</a>
            <a href="company-name-search.html"><i class="fas fa-search"></i> Company Name Search</a>
            <a href="public-limited.html"><i class="fas fa-city"></i> Public Limited Company</a>
            <a href="ngo.html"><i class="fas fa-heart"></i> NGO / Section 8 Company</a>
            <a href="startup-india.html"><i class="fas fa-flag"></i> Startup India Services</a>
          </div>
        </li>
        <li class="nav-item has-dropdown">
          <a href="#" class="nav-link">Protect Business <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="trademark.html"><i class="fas fa-trademark"></i> Trademark Registration</a>
            <a href="trademark-objection.html"><i class="fas fa-reply"></i> Reply to Trademark Objection</a>
            <a href="trademark-renewal.html"><i class="fas fa-sync"></i> Renew Your Trademark</a>
            <a href="trademark-licensing.html"><i class="fas fa-file-contract"></i> License Your Trademark</a>
            <a href="trademark-search.html"><i class="fas fa-search"></i> Trademark Search</a>
            <a href="trademark-assignment.html"><i class="fas fa-exchange-alt"></i> Sell Your Trademark</a>
            <a href="copyright.html"><i class="fas fa-copyright"></i> Copyright Registration</a>
            <a href="copyright-objection.html"><i class="fas fa-reply"></i> Reply to Copyright Objection</a>
          </div>
        </li>
        <li class="nav-item has-dropdown">
          <a href="#" class="nav-link">Manage Business <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="roc-compliance.html"><i class="fas fa-file-alt"></i> Pvt. Ltd. ROC Compliance AMC</a>
            <a href="opc-roc.html"><i class="fas fa-file-contract"></i> OPC ROC Compliance AMC</a>
            <a href="index.html"><i class="fas fa-file-invoice"></i> LLP ROC Compliance AMC</a>
            <a href="dir3.html"><i class="fas fa-id-card"></i> DIR3 DIN KYC Filing</a>
            <a href="roc-filing-pvt.html"><i class="fas fa-folder-open"></i> ROC Return Filing for Pvt. Ltd.</a>
            <a href="roc-filing-opc.html"><i class="fas fa-folder"></i> ROC Return Filing for OPC</a>
            <a href="roc-filing-llp.html"><i class="fas fa-folder-open"></i> ROC Return Filing for LLP</a>
            <a href="director.html"><i class="fas fa-user-plus"></i> Appointment of Director</a>
            <a href="director-resignation.html"><i class="fas fa-user-minus"></i> Resignation of Director</a>
            <a href="transfer-shares.html"><i class="fas fa-exchange-alt"></i> Transfer of Shares</a>
            <a href="increase-capital.html"><i class="fas fa-chart-line"></i> Increasing Capital</a>
            <a href="closure.html"><i class="fas fa-times-circle"></i> Closure of Company</a>
            <a href="closure-opc.html"><i class="fas fa-times-circle"></i> Closure of OPC</a>
            <a href="closure-llp.html"><i class="fas fa-times-circle"></i> Closure of LLP</a>
          </div>
        </li>
        <li class="nav-item has-dropdown">
          <a href="#" class="nav-link">Grow Business <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu">
            <a href="iso.html"><i class="fas fa-certificate"></i> ISO Certification</a>
            <a href="gst.html"><i class="fas fa-receipt"></i> GST Registration</a>
            <a href="msme.html"><i class="fas fa-industry"></i> MSME / Udyam</a>
          </div>
        </li>
        <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
        <li class="nav-item"><a href="reviews.html" class="nav-link">Reviews</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="tel:+919248042011" class="cta-phone"><i class="fas fa-phone"></i> +91-9248042011 / +91-9248042012</a>
        <a href="index.html#enquiry-form" class="btn btn-primary">Get Started</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon"><i class="fas fa-balance-scale"></i></div>
            <span>Catax Solutions Private Limited<span class="logo-accent"></span></span>
          </div>
          <p>Catax Solutions Private Limited supports busy Entrepreneurs to handle their messy Startup Legalities and Tax filings, so that they worry less and focus more on their dream business.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Start Business</h4>
          <ul>
            <li><a href="private-limited.html">Private Limited Company</a></li>
            <li><a href="opc.html">One Person Company</a></li>
            <li><a href="llp.html">Ltd. Liability Partnership</a></li>
            <li><a href="startup.html">Startup Incorporation</a></li>
            <li><a href="public-limited.html">Public Limited Company</a></li>
            <li><a href="ngo.html">NGO/Section 8 Company</a></li>
            <li><a href="startup-india.html">Startup India Services</a></li>
            <li><a href="company-name-search.html">Company Name Search</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Protect Business</h4>
          <ul>
            <li><a href="trademark.html">Trademark Registration</a></li>
            <li><a href="trademark-objection.html">Trademark Objection</a></li>
            <li><a href="trademark-renewal.html">Trademark Renewal</a></li>
            <li><a href="trademark-licensing.html">Trademark License</a></li>
            <li><a href="trademark-search.html">Trademark Search</a></li>
            <li><a href="trademark-assignment.html">Sell Trademark</a></li>
            <li><a href="copyright.html">Copyright Registration</a></li>
            <li><a href="copyright-objection.html">Copyright Objection</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Manage Business</h4>
          <ul>
            <li><a href="roc-compliance.html">Pvt. Ltd. ROC Compliance</a></li>
            <li><a href="opc-roc.html">OPC ROC Compliance</a></li>
            <li><a href="index.html">LLP ROC Compliance</a></li>
            <li><a href="dir3.html">DIR3 DIN KYC Filing</a></li>
            <li><a href="roc-filing-pvt.html">ROC Filing for Pvt. Ltd.</a></li>
            <li><a href="roc-filing-opc.html">ROC Filing for OPC</a></li>
            <li><a href="roc-filing-llp.html">ROC Filing for LLP</a></li>
            <li><a href="director.html">Appointment of Director</a></li>
            <li><a href="director-resignation.html">Resignation of Director</a></li>
            <li><a href="transfer-shares.html">Transfer of Shares</a></li>
            <li><a href="increase-capital.html">Increasing Capital</a></li>
            <li><a href="closure.html">Closure of Company</a></li>
            <li><a href="closure-opc.html">Closure of OPC</a></li>
            <li><a href="closure-llp.html">Closure of LLP</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="iso.html">ISO Certification</a></li>
            <li><a href="gst.html">GST Registration</a></li>
            <li><a href="msme.html">MSME / Udyam</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="disclaimer.html">Disclaimer</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Use</a></li>
            <li><a href="refund.html">Refund Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <p>&copy; ${new Date().getFullYear()} Catax Solutions Private Limited. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="privacy-policy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="refund.html">Refund</a>
        </div>
      </div>
    </div>
    <div class="footer-disclaimer">
      <div class="container">
        <p>Catax Solutions Private Limited is a private entity providing legal tech process facilitation. Registrations are issued solely by the respective Government authorities. The content on this website is for general informational purposes only and does NOT constitute legal, tax, accounting, secretarial or professional advice. Catax Solutions Private Limited is NOT a law firm, CA firm, CS firm, trademark agent, or representative of any government authority. No assurance or guarantee is given for timelines, approvals or registrations.</p>
      </div>
    </div>
  </footer>
  <a href="index.html#enquiry-form" class="floating-cta" id="floatingCta">
    <i class="fas fa-paper-plane"></i><span>Get Started</span>
  </a>
  <button class="scroll-top" id="scrollTop" aria-label="Scroll to top"><i class="fas fa-chevron-up"></i></button>`;

  function inject() {
    // Inject navbar before body content
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

    initNav();
    initScrollEvents();
  }

  function initNav() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!navbar || !hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        document.querySelectorAll('.nav-item.has-dropdown').forEach(el => el.classList.remove('open'));
      }
    });

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
  }

  function initScrollEvents() {
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');
    const floatingCta = document.getElementById('floatingCta');

    window.addEventListener('scroll', () => {
      if (!navbar) return;
      if (window.scrollY > 10) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');

      if (window.scrollY > 400) {
        scrollTop && scrollTop.classList.add('visible');
        floatingCta && floatingCta.classList.add('visible');
      } else {
        scrollTop && scrollTop.classList.remove('visible');
        floatingCta && floatingCta.classList.remove('visible');
      }
    });

    if (scrollTop) {
      scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
