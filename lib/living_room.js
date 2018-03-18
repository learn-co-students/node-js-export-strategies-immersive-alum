const Lamp = require('./lamp');
const myLamp = new Lamp(10);

myLamp.turnOn();

// prints 10
console.log(myLamp.currentBrightness);
