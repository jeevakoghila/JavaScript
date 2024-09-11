/*export default function earnMoney(){
  return "Earn money by doing work";
};

export const growMoney = () => {
  return "Grow money with us";
};

export const giveMoney = () => {
  return "Give money for education";
};

export default earnMoney;
export { growMoney, giveMoney};*/

export default class Subscriber{
  constructor(name){
    this._name = name;
  }
  emailme(){
    return `Hi this is ${this._name}.`;
  }
}