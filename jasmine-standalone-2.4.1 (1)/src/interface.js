$(document).ready(function(){

var thermostat = new Thermostat();
	displayTemperature();

$('.temperature-increase').click(function(){
	thermostat.increaseTemperature();
	displayTemperature();
	});

$('.temperature-decrease').click(function(){
	thermostat.decreaseTemperature();
	displayTemperature();
});

$('.temperature-reset').click(function(){
	thermostat.resetTemperature();
	displayTemperature();
});

$('.toggle-power-saving-mode').click(function(){
	thermostat.changePowerSavingMode();
	if(thermostat.powerSavingMode){
		$('#power-saving-mode').text('on')}
	else{
		$('#power-saving-mode').text('off')}
	displayTemperature();
});

function displayTemperature(){
	$('.temperature').text(thermostat.temperature);}
});



// Refactored below to above!
// var thermostat = new Thermostat();
// $('.temperature').text(thermostat.temperature);

// $('.temperature-increase').click(function(){
// 	thermostat.increaseTemperature();
// 	$('.temperature').text(thermostat.temperature);};
// 	});

// $('.temperature-decrease').click(function(){
// 	thermostat.decreaseTemperature();
// 	$('.temperature').text(thermostat.temperature);};
// });