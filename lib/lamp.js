const Lamp = function Lamp(maxBrightness) {
  this.currentBrightness = 0
  this.maxBrightness = maxBrightness

  Lamp.prototype.brighten = (amount) => {
    amount = amount || 1
    this.currentBrightness += amount

    if (this.currentBrightness > this.maxBrightness) {
      this.currentBrightness = this.maxBrightness
    }
  }

  Lamp.prototype.dim = (amount) => {
    amount = amount || 1
    this.currentBrightness -= amount

    if (this.currentBrightness < 0) {
      this.currentBrightness = 0
    }
  }

  Lamp.prototype.turnOff = () => {
    this.currentBrightness = 0
  }

  Lamp.prototype.turnOn = () => {
    this.currentBrightness = maxBrightness
  }
}

module.exports = Lamp
