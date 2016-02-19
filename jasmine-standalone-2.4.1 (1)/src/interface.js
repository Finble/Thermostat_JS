$(document).ready(function(){

var thermostat = new Thermostat();
	displayTemperature();
	displayColor();

$('.temperature-increase').click(function(){
	thermostat.increaseTemperature();
	displayTemperature();
	displayColor();
});

$('.temperature-decrease').click(function(){
	thermostat.decreaseTemperature();
	displayTemperature();
	displayColor();
});

$('.temperature-reset').click(function(){
	thermostat.resetTemperature();
	displayTemperature();
	displayColor();
});

$('.toggle-power-saving-mode').click(function(){
	thermostat.changePowerSavingMode();
	if(thermostat.powerSavingMode){
		$('#power-saving-mode').text('on')}
	else{
		$('#power-saving-mode').text('off')}
	displayTemperature();
	displayColor();
});

function displayColor(){
	$('.display-temperature').css('background-color', thermostat.displayTemperature);
}

function displayTemperature(){
	$('.temperature').text(thermostat.temperature);
}
});

