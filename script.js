// Wait for DOM ready 
document.addEventListener('DOMContentLoaded', () => {
  // Navigation buttons
  document.getElementById('homeBtn').addEventListener('click', () => {
    window.location.href = 'https://sunny1451.github.io/local-workers-website/home.html';
  });
  document.getElementById('aboutBtn').addEventListener('click', () => {
    window.location.href = 'https://sunny1451.github.io/local-workers-website/about.html';
  });
  document.getElementById('contactBtn').addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/sunny/OneDrive/Desktop/beautiful%20home/tracking/contact.html';
  });
  document.getElementById('loginBtn').addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/sunny/OneDrive/Desktop/new/beautiful%20home/login.html';
  });

  // Search filter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', filterServices);
  }

  // Attach click handlers to Request buttons in updated structure
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    const serviceName = card.getAttribute('data-name');
    const button = card.querySelector('.request-button');
    if (button) {
      button.addEventListener('click', () => {
        redirectToRequest(serviceName);
      });
    }
  });
});

// Filter services based on search input
function filterServices() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.service-card').forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
}

// Save selected service and redirect
function redirectToRequest(serviceName) {
  localStorage.setItem('selectedService', serviceName);
  window.location.href = 'https://sunny1451.github.io/local-workers-website/address.html';
}
