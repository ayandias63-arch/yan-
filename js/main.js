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
      <span class="wa-float__logo" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" width="20" height="20">
          <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.49 2 2.02 6.47 2.02 12.02c0 1.78.47 3.52 1.37 5.04L2 22l3.04-1.01a9.98 9.98 0 0 0 4.8 1.22h.01c5.55 0 10.02-4.47 10.02-10.02 0-2.68-1.04-5.2-2.93-7.09Zm-7.01 15.44c-1.45 0-2.89-.39-4.15-1.12l-.3-.18-1.8.59.48-1.76-.2-.31A8.05 8.05 0 0 1 3.93 12c0-4.42 3.61-8.03 8.05-8.03 2.14 0 4.16.84 5.68 2.36a8.03 8.03 0 0 1 2.35 5.67c0 4.42-3.61 8.03-8.05 8.03Zm4.41-6.02c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.01.4 1.36.52.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-.14.2.44.2.82.14 1.1-.06.28-.24.56-.48.87-.24.31-1.04 1.03-1.47 1.33-.4.24-.73.37-1.26.3-.51-.07-1.42-.58-2.59-1.36-.9-.6-1.5-1.35-1.68-1.58-.17-.23-.29-.39-.44-.39-.16 0-.35.05-.56.18-.2.12-.81.4-.95.51-.14.1-.27.18-.4.18-.13 0-.31-.06-.42-.12-.11-.06-.49-.2-.94-.49-.45-.29-.85-.67-1.16-.95-.31-.28-.57-.59-.74-.8-.17-.2-.72-.97-.72-1.64 0-.67.23-.98.56-1.26.12-.11.27-.18.42-.18.15 0 .3 0 .46.03.15.03.34.11.49.31.16.21.62.9.78 1.2.15.3.26.36.43.57.17.21.29.35.41.48.12.13.2.14.33.17.14.03.28.03.4-.01.14-.03.44-.16.98-.6.54-.44 1.02-.91 1.18-1.15.16-.24.32-.2.55-.12.22.08.7.33 1.24.65.53.32 1.02.66 1.17.8.15.14.22.25.22.4 0 .15-.06.31-.11.42a5.4 5.4 0 0 1-.34.44c-.12.17-.06.1-.77.38Z"></path>
        </svg>
      </span>
      <span class="wa-float__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.49 2 2.02 6.47 2.02 12.02c0 1.78.47 3.52 1.37 5.04L2 22l3.04-1.01a9.98 9.98 0 0 0 4.8 1.22h.01c5.55 0 10.02-4.47 10.02-10.02 0-2.68-1.04-5.2-2.93-7.09Zm-7.01 15.44c-1.45 0-2.89-.39-4.15-1.12l-.3-.18-1.8.59.48-1.76-.2-.31A8.05 8.05 0 0 1 3.93 12c0-4.42 3.61-8.03 8.05-8.03 2.14 0 4.16.84 5.68 2.36a8.03 8.03 0 0 1 2.35 5.67c0 4.42-3.61 8.03-8.05 8.03Zm4.41-6.02c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.01.4 1.36.52.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-.14.2.44.2.82.14 1.1-.06.28-.24.56-.48.87-.24.31-1.04 1.03-1.47 1.33-.4.24-.73.37-1.26.3-.51-.07-1.42-.58-2.59-1.36-.9-.6-1.5-1.35-1.68-1.58-.17-.23-.29-.39-.44-.39-.16 0-.35.05-.56.18-.2.12-.81.4-.95.51-.14.1-.27.18-.4.18-.13 0-.31-.06-.42-.12-.11-.06-.49-.2-.94-.49-.45-.29-.85-.67-1.16-.95-.31-.28-.57-.59-.74-.8-.17-.2-.72-.97-.72-1.64 0-.67.23-.98.56-1.26.12-.11.27-.18.42-.18.15 0 .3 0 .46.03.15.03.34.11.49.31.16.21.62.9.78 1.2.15.3.26.36.43.57.17.21.29.35.41.48.12.13.2.14.33.17.14.03.28.03.4-.01.14-.03.44-.16.98-.6.54-.44 1.02-.91 1.18-1.15.16-.24.32-.2.55-.12.22.08.7.33 1.24.65.53.32 1.02.66 1.17.8.15.14.22.25.22.4 0 .15-.06.31-.11.42a5.4 5.4 0 0 1-.34.44c-.12.17-.06.1-.77.38Z"></path>
        </svg>
      </span>
      <span class="wa-float__label">Falar por WhatsApp</span>
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
