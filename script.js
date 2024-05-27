document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
  
      console.log('Email:', email);
      console.log('Password:', password);
    });
  });
  