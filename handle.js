document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const backToLoginLink = document.getElementById('backToLoginLink');

    // Function to show login form
    function showLogin() {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        animateFormChange(loginForm);
        signupForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
    }

    // Function to show signup form
    function showSignup() {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        animateFormChange(signupForm);
        loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
    }

    // Function to show forgot password form
    function showForgotPassword() {
        animateFormChange(forgotPasswordForm);
        loginForm.style.display = 'none';
    }

    // Function to animate form change
    function animateFormChange(formToShow) {
        formToShow.style.display = 'block';
        formToShow.style.opacity = '0';
        formToShow.style.transform = 'translateY(20px)';
        setTimeout(() => {
            formToShow.style.opacity = '1';
            formToShow.style.transform = 'translateY(0)';
            formToShow.style.transition = 'opacity 0.3s, transform 0.3s';
        }, 50);
    }

    // Event listeners for tab switching and form display
    loginTab.addEventListener('click', showLogin);
    signupTab.addEventListener('click', showSignup);
    forgotPasswordLink.addEventListener('click', showForgotPassword);
    backToLoginLink.addEventListener('click', showLogin);

    // Form submission handlers
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateLoginForm()) {
            // Add login logic here
            alert('Login successful! Implement API call here.');
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateSignupForm()) {
            // Add signup logic here
            alert('Signup successful! Implement API call here.');
        }
    });

    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForgotPasswordForm()) {
            // Add forgot password logic here
            alert('Password reset email sent! Implement API call here.');
        }
    });

    // Validation functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function showError(input, message) {
        const container = input.parentElement;
        const error = container.querySelector('.error') || document.createElement('div');
        error.textContent = message;
        error.className = 'error';
        container.appendChild(error);
        shakeElement(input);
    }

    function clearError(input) {
        const container = input.parentElement;
        const error = container.querySelector('.error');
        if (error) {
            container.removeChild(error);
        }
    }

    // Shake animation for invalid inputs
    function shakeElement(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'shake 0.5s';
        }, 10);
    }

    // Clear errors on input
    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', function() {
            clearError(this);
        });
    });

    // Form validation functions (unchanged)
    function validateLoginForm() {
        // ... (unchanged)
    }

    function validateSignupForm() {
        // ... (unchanged)
    }

    function validateForgotPasswordForm() {
        // ... (unchanged)
    }

    // Add shake animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});
