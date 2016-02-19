$(document).ready(function(){

var thermostat = new Thermostat();
var city;
	displayTemperature();
	displayColor();
    displayWeather('London');

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
    displayWeather(city);
});


function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city; 
    var apikey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + apikey + units, function(data){
        $("#current-temperature").text(data.main.temp);
        $("#current-city").text(data.name);
    });
}

function displayColor(){
	$('.display-temperature').css('background-color', thermostat.displayTemperature);
}

function displayTemperature(){
	$('.temperature').text(thermostat.temperature);
}
});

