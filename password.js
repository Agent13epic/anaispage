function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");
  const savedPassword = localStorage.getItem("lovePassword") || "anais123"; // default password

  if (input === savedPassword) {
    window.location.href = "main.html";
  } else {
    error.textContent = "Oops! Wrong password.";
  }
}

// OPTIONAL: Allow her to change the password from main.html
function updatePassword(newPassword) {
  localStorage.setItem("lovePassword", newPassword);
}
