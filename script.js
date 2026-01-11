// Porters: small interactivity for nav, form, and year
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const yearEl = document.getElementById('year');

  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Replace with real backend or form service (Formspree, Netlify Forms, Supabase, etc.)
      alert('Thanks — Porters demo form does not send messages yet. I can wire a backend or a form service for you.');
      form.reset();
    });
  }
});
