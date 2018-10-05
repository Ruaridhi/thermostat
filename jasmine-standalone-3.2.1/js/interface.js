$(document).ready(function() {
var thermostat = new Thermostat();

$('#temperature').text(thermostat.temperature());

$('#up').click(function(){
  thermostat.increase(1);
  $('#temperature').text(thermostat.temperature());
  });

$('#down').click(function(){
  thermostat.decrease(1);
  $('#temperature').text(thermostat.temperature());
})
});
