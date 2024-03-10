const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


    const updateGreeting = () =>  {
      const enteredName = nameInput.value.trim(); 
      if (enteredName === "") {
        nameOutput.textContent = "Anonymous";
      } else {
        nameOutput.textContent = enteredName;
      }
    }

    nameInput.addEventListener('input', updateGreeting);

    