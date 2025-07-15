const correctUsername = 'timmie';
const correctPassword = 'mybaby2008';

function login() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'home.html'; // Make sure this file exists!
  } else {
    error.textContent = 'Invalid username or password.';
    error.style.display = 'block';
    document.querySelector('.login-box').classList.add('shake');
    setTimeout(() => {
      document.querySelector('.login-box').classList.remove('shake');
      error.style.display = 'none';
    }, 2000);
  }
}

// Check authentication status when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Skip auth check on login page
  if (window.location.pathname.endsWith('index.html') || 
      window.location.pathname === '/' || 
      window.location.pathname === '') {
    return;
  }
  
  // Redirect to login if not authenticated
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
});

// Add enter key support
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') login();
});
