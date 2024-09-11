/* API
web Storage API
session storage
local storage */

document.addEventListener("readystatechange",(event)=>{
  if(event.target.readyState === "complete"){
    console.log("complete");
    initApp();
  }
})
const initApp = () =>{
  const myContent = ["Earn", "Grow", "Give"];
  const myObject = {
    myname : "Jeeva",
    myContent : ["Earn", "Grow", "Give"],
    logName : () =>{
      console.log(this.myname);
    }
  }

/*window.sessionStorage*/localStorage.setItem("mySessionStore", JSON.stringify(myObject));
const key = localStorage.key(0);
console.log(key);
const length = localStorage.length;
console.log(length);
const remove = localStorage.removeItem("mySessionStore");
const clear = localStorage.clear;
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
};