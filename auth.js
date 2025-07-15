const correctUsername = 'timmie';
const correctPassword = 'mybaby2008';

function login() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'home.html';
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

// Improved auth check for protected pages
function checkAuth() {
  const isLoginPage = window.location.pathname.endsWith('index.html') || 
                     window.location.pathname === '/';
  
  if (!isLoginPage && localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}

// Run check when DOM is fully loaded
document.addEventListener('DOMContentLoaded', checkAuth);

// Add enter key support
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') login();
});
