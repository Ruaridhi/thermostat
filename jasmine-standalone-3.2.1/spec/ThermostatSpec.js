describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat
  })

  describe("temperature", function() {
    it("new thermostat should return temperature 20", function() {
      expect(thermostat.temperature()).toEqual(20);
    })
  })
  describe("increase", function() {
    it("should increase the temperature of the thermostat", function() {
      thermostat.increase(3);
      expect(thermostat.temperature()).toEqual(23);
    })
  })
  describe("decrease", function() {
    it("should decrease the temperature of the thermostat", function() {
      thermostat.decrease(10);
      expect(thermostat.temperature()).toEqual(10);
    })
  })

  describe("min temperature", function() {
    it("should raise error if temperature drops below 10 degrees", function() {
      thermostat.decrease(11);
      expect(thermostat.temperature()).toEqual(10);
    })
  })
  describe("max power-save temperature", function() {
    it("should limit temperature to 25 if powersaving mode is on", function(){
      thermostat.increase(10);
      expect(thermostat.temperature()).toEqual(25);
    })
  })
  describe("Power save mode should deafult to on", function() {
    it("should have power save turned on by default", function() {
      expect(thermostat._powersave).toEqual(true);
    })
  })
  describe("Power save off", function() {
    it("should turn power save mode off and allow temps to reach 32", function() {
      thermostat.powersaveOff();
      thermostat.increase(13);
      expect(thermostat.temperature()).toEqual(32);

    })
  })

  describe("Power save on", function() {
    it("should turn powersave mode on when off", function() {
      thermostat.powersaveOff();
      thermostat.powersaveOn();
      expect(thermostat._powersave).toEqual(true);
    })
  })
})
