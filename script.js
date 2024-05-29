const name = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#mes');

const checkbox = document.getElementById('check');
const radioButtons = document.querySelectorAll('input[type="radio"][name="query"]');
let isCheckedRaio = false

const submit = document.querySelector('#button_submit');
const form = document.getElementById('form');

const nameSpan = document.querySelector('.firstName');
const lastNameSpan = document.querySelector('.lastName');
const emailSpan = document.querySelector('.email');
const messageSpan = document.querySelector('.message');

const checkboxSpan = document.querySelector('.checkbox');
const radioButtonsSpan = document.querySelector('.radio')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
        isCheckedRaio = true;
      }
  });


  if (name.value === '') {
    name.classList.add("error");
    nameSpan.classList.remove("d-none");
   } else {
    name.classList.remove("error");
    nameSpan.classList.add("d-none");
   }

  if (lastName.value === '') {
    lastName.classList.add("error");
    lastNameSpan.classList.remove("d-none");
   } else {
    lastName.classList.remove("error");
    lastNameSpan.classList.add("d-none");
   }

  if (email.value === '') {
    email.classList.add("error");
    emailSpan.classList.remove("d-none");
   } else {
    email.classList.remove("error");
    emailSpan.classList.add("d-none");
   }

  if (message.value === '') {
    message.classList.add("error");
    messageSpan.classList.remove("d-none");

   } else {
    message.classList.remove("error");
    messageSpan.classList.add("d-none");
   }

  if (!checkbox.checked) {
    checkboxSpan.classList.remove("d-none");
        
   } else {
    checkboxSpan.classList.add("d-none");
   }

  if (!isCheckedRaio) {
    radioButtonsSpan.classList.remove("d-none");
        
   } else {
    radioButtonsSpan.classList.add("d-none");
   }

   if(name.value !== '' && lastName.value !== '' && email.value !== '' && message.value !== '' && checkbox.checked && isCheckedRaio) {
    form.submit();
   }
  
});

function alertError(message, el) {

  el.classList.add("error");

}