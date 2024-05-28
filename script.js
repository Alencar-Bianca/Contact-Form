const name = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#mes');

const checkbox = document.getElementById('check');
const radioButtons = document.querySelectorAll('input[type="radio"][name="query"]');
let isCheckedRaio = false

const submit = document.querySelector('#button_submit');
const form = document.getElementById('form');

submit.addEventListener('click', (e) => {
  e.preventDefault()
  radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
        isCheckedRaio = true;
      }
  });

  if(name.value == '') {
    alert('nome vazio')
  }
  if(lastName.value == '') {
    alert('sobrenome vazio')
  }
  if(email.value == '') {
    alert('email vazio')
  }
  if(message.value == '') {
    alert('email vazio')
  }
  if(!checkbox.checked) {
    alert('checkbox vazio')
  }
  if(!isCheckedRaio) {
    alert('isCheckedRaio vazio')
  }

  if(name.value !== '' && lastName.value !== '' && email.value !== '' && message.value !== '' && checkbox.checked && isCheckedRaio) {
    form.submit();
  }
 
 
  
});
