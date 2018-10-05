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

$('#reset').click(function(){
  thermostat.reset();
  $('#temperature').text(thermostat.temperature());
});

$("#off").click(function(){
  thermostat.powersaveOff();
});

$("#on").click(function(){
  thermostat.powersaveOn();
  $('#temperature').text(thermostat.temperature());
});

});
