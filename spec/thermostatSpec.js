describe('Thermostat',function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe("Temperature",function() {
    it("is set to 20 degrees as initial value",function() {
      expect(thermostat.temperature).toEqual(20);
    });
    it("can be increased with 'up button'",function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });
    it("can be decreased with 'down button'",function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });
    it("can't be lower then 10 degrees",function () {
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toEqual(10);
    });
    it("can be reseted",function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('Power Saving Mode',function() {
    it("when it's set 'on' max temperature can be 25 degrees",function() {
      thermostat.setPowerSavingModeOn();
      thermostat.increaseTemperature(6);
      expect(thermostat.temperature).toEqual(25);
    });
    it("when it's set 'off' max temperature can be 32 degrees",function() {
      thermostat.setPowerSavingModeOff();
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toEqual(32);
    });
    it("is set on by default",function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });
    it("can be switched off and on",function() {
      thermostat.setPowerSavingModeOff();
      expect(thermostat.powerSavingMode).toBe(false);
      thermostat.setPowerSavingModeOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });
  describe("Display Colour",function() {
    it("is green if temperature is below 18 degrees",function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.displayColour).toEqual("green");
    });
    it("is yellow if temperature is between 18 and 24 degrees",function() {
      expect(thermostat.displayColour).toEqual("yellow");
    });
    it("is red if temperature is above 24 degrees",function() {
      thermostat.increaseTemperature(5);
      expect(thermostat.displayColour).toEqual("red");
    });
  });
});
