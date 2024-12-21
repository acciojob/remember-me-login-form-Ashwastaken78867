//your JS code here. If required.

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

	constt username = usernameInput.value.trim();
	const password = passwordInput.value.trim();
	
	if(rememberMeCheckbox.checked){
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
	alert(`Logged in as ${username}`);

	checkExistingUser();
	
});

existingUserButton.addEventListener("click", () => {
	const savedUsername = localStorage.getItem("username");
	if(savedUsername) {
		alert(`Logged in as ${savedUsername}`);
	}
});

checkExistingUser();





















