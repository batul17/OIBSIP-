// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome back, ${username}!`);
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (username && password) {
        alert(`Account created successfully for ${username}!`);
    } else {
        alert('Please fill out all fields.');
    }
});
