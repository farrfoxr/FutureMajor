document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    let isValid = true;
    
    // Email validation
    if (!email || !isValidEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation
    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // If form is valid, proceed with submission
    if (isValid) {
        // Here you would typically make an API call to your backend
        // For this example, we'll just redirect
        
        // Add a small delay to show the form was submitted
        const submitButton = document.querySelector('button');
        submitButton.textContent = 'Logging in...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            window.location.href = 'Home.html'; // Redirect to home page
        }, 1000); // 1 second delay
    }
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
