// Function to handle redirection based on user's registration and login status
function handleDonate() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const isRegistered = localStorage.getItem("isRegistered");

    if (!isLoggedIn) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html"; // Change this to your actual login page
    } else if (!isRegistered) {
        // User is logged in but not registered, redirect to signup page
        window.location.href = "signup.html"; // Change this to your actual signup page
    } else {
        // User is logged in and registered, redirect to donation page
        window.location.href = "donate.html"; // Change this to your actual donation page
    }
}
