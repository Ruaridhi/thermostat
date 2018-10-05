$(document).ready(function() {
var thermostat = new Thermostat();

$('#temperature').text(thermostat.temperature());

$('#usage').text(thermostat.usage());

$('#up').click(function(){
  thermostat.increase(1);
  $('#temperature').text(thermostat.temperature());
  $('#usage').text(thermostat.usage());

  });

$('#down').click(function(){
  thermostat.decrease(1);
  $('#temperature').text(thermostat.temperature());
  $('#usage').text(thermostat.usage());
})

$('#reset').click(function(){
  thermostat.reset();
  $('#temperature').text(thermostat.temperature());
  $('#usage').text(thermostat.usage());
});

$("#off").click(function(){
  thermostat.powersaveOff();
});

$("#on").click(function(){
  thermostat.powersaveOn();
  $('#temperature').text(thermostat.temperature());
  $('#usage').text(thermostat.usage());
});

});
