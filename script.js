document.getElementById('convertBtn').addEventListener('click', function() {
const temp = document.getElementById('temperatureInput').value;
const unit = document.getElementById('unitSelect').value;
let result;

if (!temp) {
    alert('Please enter a valid number');
    return;
}

switch (unit) {
    case 'Celsius':
        result = `${temp}°C is ${celsiusToFahrenheit(temp)}°F or ${celsiusToKelvin(temp)}K`;
        break;
    case 'Fahrenheit':
        result = `${temp}°F is ${fahrenheitToCelsius(temp)}°C or ${fahrenheitToKelvin(temp)}K`;
        break;
    case 'Kelvin':
        result = `${temp}K is ${kelvinToCelsius(temp)}°C or ${kelvinToFahrenheit(temp)}°F`;
        break;
}

    document.getElementById('resultDisplay').innerText = result;
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
