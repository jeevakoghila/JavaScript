//classes

//this is by object
const myPizza = {
  size : "medium",
  crust : "original",
  bake : function(){
    return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
  }
}
myPizza.bake();

//now by class
class Pizza{
  constructor(){
    this.size = "medium";
    this.crust = "original";
  }
  bake(){
    return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
  }
}
const anotherPizza = new Pizza();
anotherPizza.bake();

//many types
class Pizza1{
  constructor(typePizza){
    this.type = typePizza;
    this.size = "small";
    this.crust = "thin";
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza`);
  }
}
const anotherPizza1 = new Pizza1("margarita");
anotherPizza1.bake();

//all to be changed
class Pizza2{
  constructor(typePizza, sizePizza, crustPizza){
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza`);
  }
}
const anotherPizza2 = new Pizza2("margarita","small","original");
anotherPizza2.bake();
const anotherPizza3 = new Pizza2("pepperonni", "large" ,"thin");
anotherPizza3.bake();

//add toppings
class Pizza3{
  constructor(typePizza, sizePizza, crustPizza){
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
    this.topping = "Olives";
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.topping}.`);
  }
}
const anotherPizza4 = new Pizza3("margarita","small","original");
anotherPizza4.topping = "sausage"
anotherPizza4.bake();

//use parameters to change
class Pizza4{
  constructor(typePizza, sizePizza, crustPizza){
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
    this.toppings = "Olives";
  }
  get toppingsPizza(){
    return this.toppings;
  }
  set toppingsPizza(toppingsPizza){
    this.toppings = toppingsPizza;
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.toppings}.`);
  }
}
const anotherPizza5 = new Pizza4("margarita","small","original");
anotherPizza5.toppingsPizza = "sausage"
anotherPizza5.bake();

//in correct way
class Pizza5{
  constructor(typePizza, sizePizza, crustPizza){
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
    this.toppings = "Olives";
  }
  getToppings(){
    return this.toppings;
  }
  setToppings(toppingsPizza){
    this.toppings = toppingsPizza;
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.toppings}.`);
  }
}
const anotherPizza6 = new Pizza5("margarita","small","original");
anotherPizza6.setToppings("sausage");
anotherPizza6.bake();

//add more toppings
class Pizza6{
  constructor(typePizza, sizePizza, crustPizza){
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
    this.toppings = [];
  }
  getToppings(){
    return this.toppings;
  }
  setToppings(toppingsPizza){
    this.toppings.push(toppingsPizza);
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.toppings}.`);
  }
}
const anotherPizza7 = new Pizza6("margarita","small","original");
anotherPizza7.setToppings("sausage");
anotherPizza7.setToppings("egg");
anotherPizza7.bake();
console.log(anotherPizza7.getToppings());

//simple parent class
class Pizza7{
  constructor(sizePizza){
    this.size = sizePizza;
    this.crust = "original";
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
    this.crust(crustPizza);
  }
}
//child class
class specialPizza extends Pizza7{
  constructor(sizePizza){
    super(sizePizza);
      this.type = "margarita";
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slice`);
  }
  bake(){
    return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza.`);
  }
}
const myspecialPizza = new specialPizza("small");
myspecialPizza.slice();
myspecialPizza.bake();

// this._crust it is private class but there will be a problem to put "_" so they introduced new method "#" 
class Pizza8{
  crust = "original";
  #sauce = "tomato"; //use only inside private
  constructor(sizePizza){
    this.size = sizePizza;
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
    this.crust = crustPizza;
  }
  bake(){
    return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} crust pizza.`);
  }
}
const anotherPizza8 = new Pizza8("small");
anotherPizza8.bake();
console.log(anotherPizza8.crust);
console.log(anotherPizza8.getCrust());
//console.log(anotherPizza8.sauce); undefined it is in private
//console.log(anotherPizza8.#sauce); error it is in private 