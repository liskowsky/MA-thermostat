$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  //$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //  $('#current-temperature').text(data.main.temp);
  //}),

  //$('#current-city').change(function() {
  //  var city = $('#current-city').val();
  //  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //    $('#current-temperature').text(data.main.temp);
  //  });
  //}),

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   });
  }

  displayWeather('Tokyo');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

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
    $('#temperature').attr('class', thermostat.displayColour);
  }

})
