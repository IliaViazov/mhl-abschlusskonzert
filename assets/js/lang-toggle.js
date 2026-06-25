(function () {
  var STORAGE_KEY = 'mhl-lang';
  var current = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyLang(lang) {
    document.querySelectorAll('.lang-en').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('.lang-de').forEach(function (el) {
      el.style.display = lang === 'de' ? '' : 'none';
    });
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'en' ? 'DE' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English');
    });
    current = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(current);
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = current === 'en' ? 'de' : 'en';
        localStorage.setItem(STORAGE_KEY, next);
        applyLang(next);
      });
    });
  });
})();
