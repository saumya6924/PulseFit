// SIGNUP
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup successful! Now login.");
});


// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    window.location.href = "landing.html";
  } else {
    document.getElementById("errorMsg").innerText = "Invalid email or password";
  }
});