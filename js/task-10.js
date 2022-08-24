function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer= document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
const boxes = [];
amount = input.value;

for (let i = 1; i<=amount; i+=1){
  const box = document.createElement('div');
  box.style.width = `${30+i*10}px`;
  box.style.height = `${30+i*10}px`;
  box.style.backgroundColor = getRandomHexColor();

  boxes.push(box);
}
console.log(boxes);
boxesContainer.append(...boxes);
input.value='';
}


function destroyBoxes(){
  boxesContainer.innerHTML = '';
}
