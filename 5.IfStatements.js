//If Statements

// if(condition){
//   run code
// }
// else{
// run different
// }

//If there
let viewer = "Jeeva is a viewer";
let reply;

if(viewer){
  reply = `Reply ${viewer}`; //${}
}
else{
  reply = `Sorry I'm still working`;
}

console.log(reply);

//If not there else
let viewer2;
let reply2;

if(viewer2){
  reply2 = `Reply ${viewer2}`;
}
else{
  reply2 = `Sorry I'm still working`;
}

console.log(reply2);

//Else if
let customerIsBanned = true;
let viewer3 = "Jeeva is a viewer";
let reply3;
if(customerIsBanned){
  reply3 = `Sorry`;
}
else if(viewer3){
  reply3 = `Reply ${viewer3}`; //${}
}
else{
  reply3 = `Sorry I'm still working`;
}

console.log(reply3);

//
let customerIsBanned4 = false;
let viewer4 = "Jeeva is a viewer";
let reply4;
let finance = true;
if(customerIsBanned4){
  reply4 = `Sorry`;
}
else if(viewer4 && finance){
  reply4 = `Reply ${viewer4} and Finance`; 
}
else if(viewer4){
  reply4 = `Reply ${viewer4}`; 
}
else{
  reply4 = `Sorry I'm still working`;
}

console.log(reply4);

//Nested if 
let testScore = 35;
let grade;
let collegeStudent = true; //false F

if(testScore >= 90){
  grade = `A`;
}else if(testScore >= 80){
  grade = `B`;
}else if(testScore >= 70){
  grade = `C`;
}else if(testScore >= 60){
  grade = `D`;
}
else{
  if(collegeStudent){
    grade = `RA`;
  }
  else{
  grade = `F`;
  }
}

console.log(grade);