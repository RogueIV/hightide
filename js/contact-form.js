const form = document.getElementById('contact-form');
const msg  = document.getElementById('form-msg');

function show(type, text) {
  msg.className = 'msg ' + (type === 'ok' ? 'ok' : 'err');
  msg.textContent = text;
}

form.addEventListener('submit', async (e) => {
  // If honeypot filled, silently drop
  if (form.company && form.company.value) { e.preventDefault(); return; }

  // Let HTML5 required/email validation run
  if (!form.checkValidity()) return;

  // Use JS fetch for inline success without leaving the page
  e.preventDefault();
  show('', '');
  try {
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
      }
    });

    if (res.ok) {
      form.reset();
      show('ok', 'Thanks! A sales rep will contact you shortly.');
    } else {
      const err = await res.json().catch(() => ({}));
      const msgText = err?.errors?.[0]?.message || 'There was a problem sending your message. Please try again.';
      show('err', msgText);
    }
  } catch (err) {
    show('err', 'Network error. Please try again.');
  }
});
