// lamp.js
//Lamp constructor
const Lamp = function Lamp(maxBrightness) {
  this.currentBrightness = 0;
  this.maxBrightness = maxBrightness;
};

//adding properties to Lamp contructor
Lamp.prototype.brighten = function(amount) {
  amount = amount || 1;

  this.currentBrightness += amount;

  if (this.currentBrightness > this.maxBrightness) {
    this.currentBrightness = this.maxBrightness;
  }
};
Lamp.prototype.dim = function(amount) {
  amount = amount || 1;

  this.currentBrightness -= amount;

  if (this.currentBrightness < 0) {
    this.currentBrightness = 0;
  }
};
Lamp.prototype.turnOff = function() {
  this.currentBrightness = 0;
};
Lamp.prototype.turnOn = function() {
  this.currentBrightness = this.maxBrightness;
};

//import power_limits object
const powerLimits = require('./power_limits');

//testing
console.log('Power limit type: ', powerLimits.type);
console.log('Its power limit is: ', powerLimits.maxBrightness);


//exporting Lamp constructor, along with its properties
module.exports = Lamp;
