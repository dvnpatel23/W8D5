Function.prototype.myBind = function(context) {
  return (() => this.apply(context));
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
console.log(myBoundTurnOn());
// console.log(boundTurnOn());