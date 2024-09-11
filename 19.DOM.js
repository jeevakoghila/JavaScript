//for ID
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2)

view1.style.display = "flex"; //none means hide
view2.style.display = "flex";

//for class
const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(".view");
console.log(sameviews);

//div
const divs = view1.getElementsByTagName("div");
console.log(divs);

const samedivs = view1.querySelectorAll("div");
console.log(samedivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[4].style.backgroundColor = "purple"; //10th div will be purple.

//to change all evendivs 
for(let i=0; i<evenDivs.length; i++){
  evenDivs[i].style.backgroundColor="green";
  evenDivs[i].style.width="150px";
}

//to change text
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";

const navBar = document.querySelector("nav");
navBar.innerHTML=`<h1>Jeeva</h1> <p>Please Subscribe click bell icon</p>`;
console.log(navBar);
navBar.style.justifyContent="space-evently";


console.log(evenDivs);
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);//text ,div element....,text
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling); //b
console.log(evenDivs[0].nextElementSibling); //div 3
console.log(evenDivs[0].previousSibling); //a
console.log(evenDivs[0].previousElementSibling); //div 1

view1.style.display="flex";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";
console.log(view2.lastChild);
console.log(view2.lastElementChild);
view2.lastElementChild.remove(); //text will be removed

//while(view1.lastChild){
 // view2.lastChild.remove();
//}

 

// create new div many Box
const createDiv = (parent,iter)=>{
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.width="100px";
  newDiv.style.height="100px";
  newDiv.style.backgroundColor="yellow";
  newDiv.style.color="black";
  newDiv.style.display="flex";
  newDiv.style.flexDirection="column";
  newDiv.style.justifyContent="center";
  newDiv.style.alignItems="center";
  parent.append(newDiv);
}
for(let i=1;i<11;i++){
  createDiv(view2,i);
}