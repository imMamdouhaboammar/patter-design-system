// Patter Design System — Landing Page Interactivity

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('copyToast');

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text || 'Copied to clipboard! ✓';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // Copy buttons
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: ${textToCopy}`);
          btn.style.transform = 'translateY(1px)';
          setTimeout(() => {
            btn.style.transform = '';
          }, 150);
        });
      }
    });
  });

  // Interactive Demo Button
  const demoBtn = document.getElementById('demoButton');
  if (demoBtn) {
    let clickCount = 0;
    const states = [
      'Hover & Click Me',
      'Nice! Hard Border ✓',
      'Tactile Motion ⚡',
      'Instrument Sans ✨'
    ];
    demoBtn.addEventListener('click', () => {
      clickCount = (clickCount + 1) % states.length;
      demoBtn.textContent = states[clickCount];
      showToast(`State changed: ${states[clickCount]}`);
    });
  }
});
