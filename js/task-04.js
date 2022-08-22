let counterValue = 0;

const value = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


const functionDecrement = ()=> {counterValue-=1; return value.textContent = counterValue;}
const functionIncrement = ()=> {counterValue+=1; return value.textContent = counterValue;}

decrementBtn.addEventListener("click", functionDecrement);
incrementBtn.addEventListener("click", functionIncrement);





