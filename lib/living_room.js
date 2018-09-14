const Decor = require('./lamp');
const powerEvents = require('./power');


const myLamp = new Decor(10);


console.log(myLamp.currentBrightness);


power.surge(myLamp);
power.outage(myLamp);


myLamp.turnOn();

console.log(myLamp.currentBrightness);




module.exports = Lamp.js;
