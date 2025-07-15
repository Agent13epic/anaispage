// Secure credential storage (Note: Still client-side - for demo only)
const AUTH_CREDENTIALS = {
  username: 'timmie', // Stored in lowercase for case-insensitive check
  password: 'mybaby2008'
};

// Login function with enhanced validation
function login() {
  const usernameInput = document.getElementById('username').value.trim().toLowerCase();
  const passwordInput = document.getElementById('password').value;
  const errorElement = document.getElementById('error');
  const loginForm = document.querySelector('.login-box');

  // Validate credentials
  if (usernameInput === AUTH_CREDENTIALS.username && passwordInput === AUTH_CREDENTIALS.password) {
    // Successful login
    sessionStorage.setItem('authToken', 'true'); // Using sessionStorage instead of localStorage
    window.location.href = 'home.html';
  } else {
    // Failed login
    errorElement.textContent = 'Invalid credentials. Please try again.';
    errorElement.style.display = 'block';
    loginForm.classList.add('shake');
    
    // Clear error after delay
    setTimeout(() => {
      errorElement.style.display = 'none';
      loginForm.classList.remove('shake');
    }, 3000);
  }
}

// Authentication check for protected pages
function checkAuth() {
  const publicPages = ['/', '/index.html'];
  const isPublicPage = publicPages.includes(window.location.pathname);
  
  if (!isPublicPage && sessionStorage.getItem('authToken') !== 'true') {
    window.location.href = 'index.html';
  }
}

// Initialize auth check on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run auth check if not on login page
  if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
    checkAuth();
  }
  
  // Add Enter key functionality
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      login();
    }
  });
});
