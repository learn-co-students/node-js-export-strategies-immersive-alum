const Decor = require('./lamp');
const powerEvents = require('./power');
const powerLimits = require('./power_limits');

console.log(powerLimits.type);
console.log(powerLimits.maxBrightness);

const myLamp = new Decor(10);

myLamp.turnOn();

console.log(myLamp.currentBrightness);

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

console.log(myLamp.currentBrightness);