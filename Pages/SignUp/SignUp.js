document.addEventListener('DOMContentLoaded', () => {
    // Store form data
    let formData = {
        role: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        education: ''
    };

    // Get DOM elements
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const roleCards = document.querySelectorAll('.role-card');
    const accountForm = document.getElementById('accountForm');
    const personalForm = document.getElementById('personalForm');
    const progressSteps = document.querySelectorAll('.progress-step');
    const loginText = document.getElementById('loginText');

    // Role selection
    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            formData.role = card.dataset.role;
            moveToStep(2);
        });
    });

    // Account form submission
    accountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordError = document.getElementById('passwordError');

        // Password validation
        if (password !== confirmPassword) {
            passwordError.textContent = 'Passwords do not match';
            return;
        }
        
        formData.email = email;
        formData.password = password;
        moveToStep(3);
    });

    // Personal form submission
    personalForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Collect form data
        formData.firstName = document.getElementById('firstName').value;
        formData.lastName = document.getElementById('lastName').value;
        formData.age = document.getElementById('age').value;
        formData.gender = document.getElementById('gender').value;
        formData.education = document.getElementById('education').value;

        try {
            // This is where you'd make an API call to your backend
            // const response = await fetch('/api/signup', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });

            console.log('Form Data:', formData);
            window.location.href = 'Home.html'; // Replace with your home page URL
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Add back button event listeners
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = getCurrentStep();
            moveToStep(currentStep - 1);
        });
    });

    // Function to get current step
    function getCurrentStep() {
        if (!step1.classList.contains('hidden')) return 1;
        if (!step2.classList.contains('hidden')) return 2;
        if (!step3.classList.contains('hidden')) return 3;
        return 1;
    }

    // Modified moveToStep function
    function moveToStep(step) {
        // Hide all steps
        [step1, step2, step3].forEach(s => s.classList.add('hidden'));
        
        // Show the current step
        switch(step) {
            case 1:
                step1.classList.remove('hidden');
                loginText.classList.remove('hidden');
                break;
            case 2:
                step2.classList.remove('hidden');
                loginText.classList.add('hidden');
                break;
            case 3:
                step3.classList.remove('hidden');
                loginText.classList.add('hidden');
                break;
        }

        // Update progress bar
        progressSteps.forEach((stepDot, index) => {
            if (index + 1 <= step) {
                stepDot.classList.add('active');
            } else {
                stepDot.classList.remove('active');
            }
        });

        // Save current step to formData
        formData.currentStep = step;
    }

    // Initialize first step
    moveToStep(1);
});
