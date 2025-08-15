// ColorCrest Paints — Interactions
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    menuToggle.setAttribute('aria-expanded', String(!open));
  });
}

// Simple client-side form validation
const form = document.getElementById('inquiryForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('label').forEach(label => {
      const input = label.querySelector('input, textarea');
      const errorEl = label.querySelector('.error');
      if (!input.checkValidity()) {
        errorEl.textContent = input.validationMessage;
        valid = false;
      } else {
        errorEl.textContent = '';
      }
    });
    if (valid) {
      form.reset();
      const msg = form.querySelector('.form-success');
      msg.hidden = false;
      setTimeout(() => { msg.hidden = true; }, 3000);
    }
  });
}
