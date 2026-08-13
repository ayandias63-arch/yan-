document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.primary-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (menu && toggle) toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('[data-current-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
  document.querySelectorAll('[data-lead-form]').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('[data-form-message]');
    if (message) message.textContent = 'Obrigado! Integre este formulário ao seu serviço de e-mail para receber os cadastros.';
  }));
  const search = document.querySelector('[data-blog-search]');
  if (search) search.addEventListener('input', () => {
    document.querySelectorAll('[data-blog-category]').forEach((item) => { item.hidden = !item.textContent.toLowerCase().includes(search.value.toLowerCase()); });
  });

  if (!document.querySelector('.wa-float')) {
    const whatsappLink = document.createElement('a');
    whatsappLink.className = 'wa-float';
    whatsappLink.href = 'https://wa.me/5551989866014';
    whatsappLink.target = '_blank';
    whatsappLink.rel = 'noopener noreferrer';
    whatsappLink.setAttribute('aria-label', 'Falar por WhatsApp');
    whatsappLink.innerHTML = `
      <span class="wa-float__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M16 3a13 13 0 0 0-11.16 19.67L3 29l6.5-1.7A13 13 0 1 0 16 3Zm0 23.65a10.57 10.57 0 0 1-5.38-1.47l-.38-.23-3.86 1 1.03-3.76-.25-.39A10.64 10.64 0 1 1 16 26.65Zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.03-.3-.11-.51-.16-.72.16-.21.32-.83 1.03-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.6-1.91-1.79-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.63-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.26 3.46 5.48 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z"></path>
        </svg>
      </span>
      <span class="wa-float__label">Fale conosco</span>
    `;
    whatsappLink.addEventListener('mouseenter', () => whatsappLink.classList.add('is-visible'));
    whatsappLink.addEventListener('mouseleave', () => whatsappLink.classList.remove('is-visible'));
    whatsappLink.addEventListener('focus', () => whatsappLink.classList.add('is-visible'));
    whatsappLink.addEventListener('blur', () => whatsappLink.classList.remove('is-visible'));
    document.body.appendChild(whatsappLink);
  }
});

// Carrega a camada visual compartilhada respeitando a profundidade de cada rota.
(() => {
  const script = document.currentScript;
  const source = script && script.getAttribute('src');
  if (!source) return;
  const theme = new URL(source, window.location.href).href.replace(/js\/main\.js$/, 'css/theme.css');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = theme;
  document.head.appendChild(link);
})();
