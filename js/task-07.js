 const fontSize = document.querySelector('input#font-size-control');
 const text=document.querySelector('span#text');


 fontSize.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value+'px';
  });