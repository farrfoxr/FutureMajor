document.addEventListener('DOMContentLoaded', () => {
    // Get both buttons that should redirect to signup
    const heroButton = document.querySelector('.btn-hero');
    const signupButton = document.querySelector('.btn-filled');
    const loginButton = document.querySelector('.btn-outline');
    
    // Add click handlers for signup buttons
    heroButton.addEventListener('click', () => {
        window.location.href = 'SignUp.html';
    });

    signupButton.addEventListener('click', () => {
        window.location.href = 'SignUp.html';
    });

    // Add click handler for login button (for future implementation)
    loginButton.addEventListener('click', () => {
        // You can change this to your login page when it's ready
        window.location.href = 'LogIn.html';
    });
});