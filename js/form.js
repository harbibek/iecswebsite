/* ============================================
   form.js — Contact form validation & submission
   ============================================ */
function submitForm() {
  const name    = document.getElementById('f-name').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const service = document.getElementById('f-service').value;
  const message = document.getElementById('f-message').value.trim();
  const btn     = document.getElementById('form-btn');
  const success = document.getElementById('form-success');

  // Basic validation
  if (!name) {
    alert('Please enter your name.');
    document.getElementById('f-name').focus();
    return;
  }
  if (!phone) {
    alert('Please enter your phone number.');
    document.getElementById('f-phone').focus();
    return;
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    document.getElementById('f-email').focus();
    return;
  }

  // Simulate submission (replace with real API call when backend is ready)
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    // Clear fields
    document.getElementById('f-name').value    = '';
    document.getElementById('f-phone').value   = '';
    document.getElementById('f-email').value   = '';
    document.getElementById('f-service').value = '';
    document.getElementById('f-message').value = '';

    // Show success
    success.style.display = 'block';

    // Reset button
    btn.innerHTML = `Send Enquiry
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 8l10 0M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    btn.disabled = false;

    // Hide success message after 6 seconds
    setTimeout(() => { success.style.display = 'none'; }, 6000);
  }, 900);
}
