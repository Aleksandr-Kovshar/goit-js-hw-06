function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


  const page = document.querySelector('body');
  const changeColorBtn = document.querySelector('.change-color');
  const textColor = document.querySelector('.color');
  

  const changeColor = (event) =>{
    page.style.backgroundColor = getRandomHexColor();
    textColor.textContent = getRandomHexColor();
  }

  changeColorBtn.addEventListener("click", changeColor);