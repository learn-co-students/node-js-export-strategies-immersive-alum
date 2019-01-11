const Lamp = require('./lamp');//import Lamp constructor
const myLamp = new Lamp(10);//create constructor

//testing properties
console.log(myLamp.currentBrightness);
myLamp.turnOn();
console.log(myLamp.currentBrightness);

//import file power.js, along with the functions it exports
const powerEvents = require('./power');

//testing Lamp & power.js
console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
powerEvents.surge(myLamp);
powerEvents.outage(myLamp);
myLamp.turnOn();
console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
