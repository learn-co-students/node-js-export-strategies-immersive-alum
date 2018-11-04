const Lamp = require('./lamp');
const power = require('./power');
const powerLimits = require('./power_limits');

const myLamp = new Lamp(10);

// myLamp.turnOn();
//
// console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
//
// power.surge(myLamp);
// power.outage(myLamp);
//
// myLamp.turnOn();
//
// console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

console.log(powerLimits.type);
console.log(powerLimits.maxBrightness);
