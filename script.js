const form = document.getElementById('form');
const submitButton = document.querySelector('#button_submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const inputs = [
    { element: document.querySelector('#firstName'), span: document.querySelector('.firstName') },
    { element: document.querySelector('#lastName'), span: document.querySelector('.lastName') },
    { element: document.querySelector('#email'), span: document.querySelector('.email') },
    { element: document.querySelector('#mes'), span: document.querySelector('.message') }
  ];

  let isCheckedRadio = false;
  const radioButtons = document.querySelectorAll('input[type="radio"][name="query"]');

  const checkbox = document.getElementById('check');
  const checkboxSpan = document.querySelector('.checkbox');
  const radioButtonsSpan = document.querySelector('.radio');

  inputs.forEach(input => {
    if (input.element.value === '') {
      input.element.classList.add("error");
      input.span.classList.remove("d-none");
    } else {
      input.element.classList.remove("error");
      input.span.classList.add("d-none");
    }

    if (input.element.id === 'email') {
      const emailValue = input.element.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      const isValidEmail = emailRegex.test(emailValue); 
      if (!isValidEmail) {
        input.element.classList.add("error");
        input.span.classList.remove("d-none");
      } else {
        input.element.classList.remove("error");
        input.span.classList.add("d-none");
      }
    }
  });

  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      isCheckedRadio = true;
    }
  });

  if (!isCheckedRadio) {
    radioButtonsSpan.classList.remove("d-none");
  } else {
    radioButtonsSpan.classList.add("d-none");
  }

  if (!checkbox.checked) {
    checkboxSpan.classList.remove("d-none");
  } else {
    checkboxSpan.classList.add("d-none");
  }

  if (inputs.every(input => input.element.value !== '') && checkbox.checked && isCheckedRadio) {
    form.submit();
  }
}
