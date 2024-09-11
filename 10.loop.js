//Loop

//While Loop

let i = 1;
while(i <= 50){
  console.log(i);
  i = i + 1; //1 to 50
}

let j = 1;
while(j <= 50){
  console.log(j);
  j++; //1 to 50
}

let k = 1;
while(k <= 50){
  console.log(k);
  k = k + 2; //odd
}

let b = 0;
while(b <= 50){
  console.log(b);
  b = b + 2; //even
}

let a = 0;
while(a <= 50){
  console.log(a);
  a = a + 10;//10 20
}

//do while
let c = 50;
do{
  console.log(c)
  c = c + 10;
} while(c<50) //atleast once

//For Loop
for(d=1;d<=50;d++){
  console.log(d);
}

//used in string also
let me = "Jeeva";
for(let e=0;e <= me.length;e++){
  console.log(me.charAt(e))
}

//2nd letter
let me1 = "Jeeva";
for(let e=0;e <= me1.length;e+=2){
  console.log(me1.charAt(e))
}

//nested
for(let f=1;f<=5;f++){
  for(let g=1;g<=5;g++){
    console.log(f,g);
  }
}

//break it 
let h = 0;
while(h < 10){
  if(h === 5){
    break;
  }
  h = h + 1;
}
console.log(h);

//expect that iteration all display
let text = ``;
for(let l=0;l<=10;l++){
  if(l === 3){
    continue;
  }
  text = text + l;
}
console.log(text);