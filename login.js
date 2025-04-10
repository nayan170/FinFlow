// Tab functionality for login page
document.addEventListener('DOMContentLoaded', function() {
    // Get tab elements if they exist on the page
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Form validation for register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Basic validation
            if (!fullName || !email || !phone || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // If validation passes, you would normally submit the form to your backend
            // For this example, we'll just redirect to success page
            alert('Account created successfully! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }

    // Form validation for email login form
    const loginEmailForm = document.getElementById('loginEmailForm');
    if (loginEmailForm) {
        loginEmailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // If validation passes, redirect to dashboard
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'index.html';
        });
    }

    // Form validation for phone login form
    const loginPhoneForm = document.getElementById('loginPhoneForm');
    if (loginPhoneForm) {
        loginPhoneForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('loginPhone').value;
            const password = document.getElementById('loginPhonePassword').value;
            
            // Basic validation
            if (!phone || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // If validation passes, redirect to dashboard
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'index.html';
        });
    }
});