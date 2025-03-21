document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    form.addEventListener("submit", (event) => {
      let isValid = true;

      // Reset error messages
      usernameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      confirmPasswordError.textContent = "";

      // Validate username
      if (!username.value.trim()) {
        usernameError.textContent = "Username is required.";
        isValid = false;
      } else if (username.value.trim().length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        emailError.textContent = "Email is required.";
        isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
      }

      // Validate password
      if (!password.value.trim()) {
        passwordError.textContent = "Password is required.";
        isValid = false;
      } else if (password.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
      }

      // Validate confirm password
      if (!confirmPassword.value.trim()) {
        confirmPasswordError.textContent = "Please confirm your password.";
        isValid = false;
      } else if (confirmPassword.value.trim() !== password.value.trim()) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
      }

      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });
  });