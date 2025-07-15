const correctUsername = 'timmie'; // Changed to lowercase for case-insensitive matching
const correctPassword = 'mybaby2008'; // Updated password

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
  }
}

// Auth check for protected pages
if (!['/', '/index.html'].includes(window.location.pathname)) {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}
