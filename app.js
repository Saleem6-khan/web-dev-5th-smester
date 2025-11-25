// app.js - Essential JavaScript for LMS Project

// DOM Content Loaded Event
alert('hello');
document.addEventListener('DOMContentLoaded', function() {
    console.log('LMS System Loaded');
    
    // Initialize all functionality
    initFormValidation();
    initNavigation();
    initUIInteractions();
    initPasswordToggle();
});

// Form Validation Functions
function initFormValidation() {
    // Signup Form Validation
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            if (!validateSignupForm()) {
                e.preventDefault();
            }
        });
    }

    // Login Form Validation
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            if (!validateLoginForm()) {
                e.preventDefault();
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateContactForm()) {
                e.preventDefault();
            }
        });
    }
}

// Signup Form Validation
function validateSignupForm() {
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Full Name Validation
    if (!fullname.value.trim()) {
        showError(fullname, 'Full name is required');
        isValid = false;
    }

    // Email Validation
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Password Validation
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    // Confirm Password Validation
    if (!confirmPassword.value) {
        showError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

// Login Form Validation
function validateLoginForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    let isValid = true;

    clearErrors();

    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    }

    return isValid;
}

// Contact Form Validation
function validateContactForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;

    clearErrors();

    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }

    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }

    return isValid;
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    // Remove existing error
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add error styling to input
    input.style.borderColor = '#e74c3c';
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '5px';
    errorElement.textContent = message;
    
    input.parentNode.appendChild(errorElement);
}

function clearErrors() {
    // Remove all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    // Reset input borders
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// Navigation Functions
function initNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.php')) {
            link.style.color = '#4CAF50';
            link.style.fontWeight = 'bold';
        }
    });
}

// UI Interactions
function initUIInteractions() {
    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form input focus effects
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#4CAF50';
            this.style.transition = 'border-color 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '';
        });
    });

    // Table row hover effects
    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f5f5f5';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

// Password Visibility Toggle
function initPasswordToggle() {
    // This can be enhanced to add show/hide password functionality
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.width = '100%';
        
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.textContent = '👁️';
        toggle.style.position = 'absolute';
        toggle.style.right = '10px';
        toggle.style.top = '50%';
        toggle.style.transform = 'translateY(-50%)';
        toggle.style.background = 'none';
        toggle.style.border = 'none';
        toggle.style.cursor = 'pointer';
        toggle.style.fontSize = '1rem';
        
        wrapper.appendChild(toggle);
        
        toggle.addEventListener('click', function() {
            if (input.type === 'password') {
                input.type = 'text';
                toggle.textContent = '🔒';
            } else {
                input.type = 'password';
                toggle.textContent = '👁️';
            }
        });
    });
}

// Session and Authentication Helpers
const AuthHelper = {
    // Check if user is logged in (for frontend)
    isLoggedIn: function() {
        return localStorage.getItem('userLoggedIn') === 'true';
    },

    // Simulate login (for frontend demonstration)
    login: function() {
        localStorage.setItem('userLoggedIn', 'true');
    },

    // Simulate logout (for frontend demonstration)
    logout: function() {
        localStorage.setItem('userLoggedIn', 'false');
    },

    // Get user data from localStorage
    getUser: function() {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    }
};

// Page Specific Functionality
function initPageSpecificFeatures() {
    // Home Page Features
    if (document.querySelector('.get-started-btn')) {
        const getStartedBtn = document.querySelector('.get-started-btn');
        getStartedBtn.addEventListener('click', function() {
            window.location.href = 'signup.php';
        });
    }

    // Live Class Page Features
    if (document.querySelector('.class-schedule')) {
        // Add click tracking for class links
        const classLinks = document.querySelectorAll('.class-schedule a');
        classLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('User clicked on class:', this.textContent);
                // You can add analytics tracking here
            });
        });
    }

    // Recorded Class Page Features
    if (document.querySelector('.recorded-class-table')) {
        const watchButtons = document.querySelectorAll('.watch-recording-btn');
        watchButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('This would open the recorded class video in a real implementation.');
                // In real implementation, this would open a video player
            });
        });
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Page loaded completely
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime} milliseconds`);
});

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateSignupForm,
        validateLoginForm,
        validateContactForm,
        AuthHelper
    };
}