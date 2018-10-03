function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.increase = function(degreesUp) {
  if (this._temperature + degreesUp > 25) {
    this._temperature = 25;
    return("Power saving mode on, max temperature 25 degrees");
  } else{
    this._temperature += degreesUp;
  }
}

Thermostat.prototype.decrease = function(degreesDown) {
  if (this._temperature - degreesDown < 10) {
    this._temperature = 10;
    return "Temperature has been set to 10. This is the minimum.";
  } else {
    this._temperature -= degreesDown;
  }

}
