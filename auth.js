const correctUsername = 'Anaïs';
const correctPassword = 'mybaby2008';

function login() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  const error = document.getElementById('error');

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'home.html';
  } else {
    error.textContent = 'Invalid username or password babe🤭.';
  }
}

// Prevent access if not logged in
if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}
