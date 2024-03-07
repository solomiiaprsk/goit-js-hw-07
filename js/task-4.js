const loginForm = document.querySelector('.login-form');

  const formSubmit = (event) => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    const trimmedEmail = emailInput.value.trim();
    const trimmedPassword = passwordInput.value.trim();

    if (!trimmedEmail || !trimmedPassword) {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: trimmedEmail,
      password: trimmedPassword,
    };

    console.log(formData);

    loginForm.reset();
  };

  loginForm.addEventListener('submit', formSubmit);