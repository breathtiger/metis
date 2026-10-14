(() => {
  const form = document.querySelector('#consultationForm');
  const success = document.querySelector('#formSuccess');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
    if (!form.checkValidity()) return;
    success.classList.remove('d-none');
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  document.querySelectorAll('#mainNav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('#mainNav');
      if (menu?.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
})();
