$(document).ready(function(){

var thermostat = new Thermostat();
var city;
	displayTemperature();
	displayColor();

$('.temperature-increase').click(function(){
	thermostat.increaseTemperature();
    console.log(thermostat.temperature);
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

$(".select-city").click(function(){
    city = $(".city-input").val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    $("#current-temperature").text(data.main.temp);
    $("#current-city").text(data.name);
    });
});

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    $("#current-temperature").text(data.main.temp);
    $("#current-city").text(data.name);

});



function displayColor(){
	$('.display-temperature').css('background-color', thermostat.displayTemperature);
}

function displayTemperature(){
	$('.temperature').text(thermostat.temperature);
}
});

