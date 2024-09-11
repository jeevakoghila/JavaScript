//Objects
const myObj = {name:"Jeeva"}
//{key:value}
console.log(myObj);
console.log(myObj.name);

const myObj1 = {
  jeeva : true,
  no : 1000,
  content : {
    earn : "JS",
    grow : "Stocks"
  },
  subdivisions : ["Earn","Grow","Give"]
};

console.log(myObj1);
console.log(myObj1.jeeva);
console.log(myObj1.no);
console.log(myObj1.content);
console.log(myObj1.content.earn);
console.log(myObj1.content.grow);
console.log(myObj1.subdivisions);
console.log(myObj1.subdivisions[0]);
console.log(myObj1.subdivisions[1]);
console.log(myObj1.subdivisions[2]);

//also
console.log(myObj1["jeeva"]);
console.log(myObj1["no"]);
console.log(myObj1["content"]);
console.log(myObj1["subdivisions"]);

//function in object
const myObj2 = {
  jeeva : true,
  no : 1000,
  content : {
    earn : "JS",
    grow : "Stocks"
  },
  subdivisions : ["Earn","Grow","Give"],
  action : function(){
    return "Hello World";
  },
  action1 : function(){
    return `Earn by learning ${this.content.earn}`
  }
};
console.log(myObj2.action());
console.log(myObj2.action1());

const vehicle = {
  door:2,
  engine: function(){
    return "Vrrooom!";
  }
};
console.log(vehicle.engine());

const car = Object.create(vehicle);
car.wheels = 4;
car.engine = function(){return "Whoosh"}; //override
console.log(car.engine());
console.log(car.door);
console.log(car);

const tesla = Object.create(car);
tesla.engine = function(){return "Shhhh"};
console.log(tesla.door);
console.log(tesla.engine());

//New
const movie = {
  actor : "Kavin",
  music : "Arr",
  director : "Lokesh",
  producer : "Anbu"
};

console.log(Object.keys(movie));
console.log(Object.values(movie));

movie.actoress = "Meena";
for (let job in movie){
  console.log(movie[job]);
}

console.log(movie.hasOwnProperty("producer"));
delete movie.producer;
console.log(movie.hasOwnProperty("producer"));
for (let job in movie){
  console.log(`${job}, it's ${movie[job]}`);
}

//dstructuring the objects
const {music: myFavMusicDirector, director: myFavDirector} = movie;
console.log(myFavMusicDirector , myFavDirector);

const {actor, music, director, producer} = movie;
console.log(actor);

//function sings(music){return music;};
//console.log(sings(movie));
//{actor: 'Kavin', music: 'Arr', director: 'Lokesh', actoress: 'Meena'}

//const {music} = movie;
function sings({music}){return music;};
console.log(sings(movie));