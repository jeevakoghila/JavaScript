const button = document.querySelector("#btn");
const span = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomColor(){
  const hexValue ="0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click",()=>{
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
  span.style.color = randomColor;
  button.style.color = randomColor;
})