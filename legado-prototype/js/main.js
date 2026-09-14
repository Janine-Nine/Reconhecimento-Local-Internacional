/* ==========================================================================
   Reconhecimento Local Web — main.js
   Troca de idioma (PT/EN/ES) + menu mobile + placeholders/selects
   ========================================================================== */
(function(){
  const STORAGE_KEY = 'rlw_lang';

  function currentLang(){
    return localStorage.getItem(STORAGE_KEY) || 'pt';
  }

  function applyLang(lang){
    const dict = window.RLW_I18N[lang] || window.RLW_I18N.pt;

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined){ el.textContent = dict[key]; }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key] !== undefined){ el.setAttribute('placeholder', dict[key]); }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{
      const key = el.getAttribute('data-i18n-aria-label');
      if(dict[key] !== undefined){ el.setAttribute('aria-label', dict[key]); }
    });

    document.querySelectorAll('.lang-switch button').forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangSwitch(){
    document.querySelectorAll('.lang-switch button').forEach(btn=>{
      btn.addEventListener('click', ()=> applyLang(btn.dataset.lang));
    });
    applyLang(currentLang());
  }

  function initNavToggle(){
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if(!toggle || !links) return;
    toggle.addEventListener('click', ()=> links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> links.classList.remove('open')));
  }

  function markActiveNav(){
    const page = (location.pathname.split('/').pop() || 'home.html');
    document.querySelectorAll('.nav-links a').forEach(a=>{
      if(a.getAttribute('href') === page) a.classList.add('active');
    });
  }

  function initContactForm(){
    const form = document.getElementById('contact-form');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById('form-success');
      const original = btn.textContent;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Novo contato - ${data.get('business') || data.get('name')}`);
      const body = encodeURIComponent([
        `Nome: ${data.get('name')}`,
        `E-mail: ${data.get('email')}`,
        `Telefone / WhatsApp: ${data.get('phone') || '-'}`,
        `Negócio: ${data.get('business') || '-'}`,
        `Serviço: ${data.get('service') || '-'}`,
        '',
        `Mensagem: ${data.get('message') || '-'}`
      ].join('\n'));
      window.location.href = `mailto:contato@reconhecimentolocalweb.com?subject=${subject}&body=${body}`;
      btn.textContent = '✓';
      btn.disabled = true;
      if(success) success.textContent = RLW_I18N[currentLang()]['contato.form.success'];
      setTimeout(()=>{
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
      }, 1800);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initLangSwitch();
    initNavToggle();
    markActiveNav();
    initContactForm();
  });
})();
