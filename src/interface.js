$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temperature-up").on("click", function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  }),

  $("#temperature-down").on("click", function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  }),

  $("#temperature-reset").on("click", function() {
    thermostat.reset();
    updateTemperature();
  }),

  $("#powersaving-off").on("click", function() {
    thermostat.setPowerSavingModeOff();
  }),

  $("#powersaving-on").on("click", function() {
    thermostat.setPowerSavingModeOn();
    updateTemperature();
  })

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
  }

})
