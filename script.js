//your JS code here. If

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("rememberMe");
const existingUserButton = document.getElementById("existing");

// Check if user details exist in localStorage
function checkExistingUser() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        // Show the existing user button
        existingUserButton.style.display = "block";
    } else {
        // Hide the existing user button
        existingUserButton.style.display = "none";
    }
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (rememberMeCheckbox.checked) {
        // Save details to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove details from localStorage
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Display login alert
    alert(`Logged in as ${username}`);

    // Check if we need to show the "Login as existing user" button
    checkExistingUser();
});

existingUserButton.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});

// Initial check for existing user
checkExistingUser();











