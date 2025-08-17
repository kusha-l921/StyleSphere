// Handle signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.email === email)) {
      alert("Email already registered. Please login.");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
}

// Handle login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful! Welcome " + user.username);
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}