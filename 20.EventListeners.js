//EventListeners
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
console.log(view2); 
console.log(div);
console.log(h2);

//syntax
//addEventListeners(event,function,usecapture)
//const dosomthing = () =>{
 // alert("doing somthing");
//};
//add
//h2.addEventListener("click",dosomthing,false);
//h2.removeEventListener("click",dosomthing,false);

//change text while clicking
//h2.addEventListener("click",function(event){
 // console.log(event.target);
 // event.target.textContent = "Subscribed";
//})

//Event Bubbling up
/*document.addEventListener("readystatechange",(event)=>{
  if(event.target.readyState === "complete"){
    console.log("complete");
    initApp();
  }
})
const initApp=()=>{
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event)=>{
   //event.stopPropagation();//starting next stop
    //view.style.backgroundColor="purple";
    //event.target.style.backgroundColor="purple";
    //view.classList.add("purple"); // it will be displayed when click and wont be changed
    //view.classList.remove("darkblue");// it will be removed when click
    view.classList.toggle("purple") // it displayed and changed
    view.classList.toggle("darkblue") // it displayed and changed
  }) // default false bubbled up

  div.addEventListener("click", (event)=>{
    //event.stopPropagation(); // its will stop here 
    //div.style.backgroundColor="blue";
    //event.target.style.backgroundColor="blue";
    div.classList.toggle("green");
    div.classList.toggle("black");
  })

  h2.addEventListener("click",(event)=>{
    //event.stopPropagation(); //only it will change
    //event.target.textContent="Subscried"
    const myText = event.target.textContent;
    myText === "Subscribe" ? (event.target.textContent = "Subscribed") : (event.target.textContent = "Subscribe")
  })
 }*/

const nav = document.querySelector("nav");
nav.addEventListener("mouseover",(event)=>{
  event.target.classList.add("height100");
});
nav.addEventListener("mouseover",(event)=>{
  event.target.classList.add("height100");
})


//view3
document.addEventListener("readystatechange",(event)=>{
  if(event.target.readyState === "completed"){
    console.log("completed");
    initApp();
  }
})

const initApp = () =>{
  const view3 = document.querySelector("#view3");
  const myForm = document.querySelector("#myForm");
  myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("Submit Event");
  })
}