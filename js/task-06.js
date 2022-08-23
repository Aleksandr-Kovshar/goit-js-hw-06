const textInput = document.querySelector('input');

textInput.addEventListener('blur', (event) => {
  const inputUser = event.currentTarget;
  const validationLength = Number(inputUser.dataset.length);

  if (inputUser.value.length===validationLength){
    inputUser.classList.remove('invalid');
    inputUser.classList.add('valid');
  }
  else{inputUser.classList.remove('valid');
  inputUser.classList.add('invalid');}
   
});




