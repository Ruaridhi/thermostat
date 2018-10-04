function Thermostat() {
  this._temperature = 20;
  this._powersave = true;
  this._usage = "medium-usage";
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.powersaveOff = function() {
  this._powersave = false;
}

Thermostat.prototype.powersaveOn = function() {
  this._powersave = true;
}

Thermostat.prototype.reset = function() {
  return this._temperature = 20
}



Thermostat.prototype.increase = function(degreesUp) {

  if (this._powersave == true && this._temperature + degreesUp > 25){
    this._temperature = 25;
    return("Power saving mode on, max temperature 25 degrees");
  } else if (this._powersave == false && this._temperature + degreesUp > 32){
    this._temperature = 32;
    return("Power saving mode off, max temperature 32 degrees");
  }else {
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

Thermostat.prototype.usage = function() {
  if (this._temperature < 18){
    return this._usage = "low-usage";
  } else if (this._temperature > 25) {
    return this._usage = "high-usage";
  }
}
