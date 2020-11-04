let temperatureCelcius = 34
let temperatureFahrenheit = 102

// function to convert celcius to fahrenheit
const CelciusToFahrenheit = (temperatureCelcius) => (temperatureCelcius * 9/5) + 32

// function to convert fahrenheit to celcius
const FahrenheitToCelcius = (temperatureFahrenheit) => (temperatureFahrenheit - 32) * 5/9

console.log(temperatureCelcius + "°C " + " is " + CelciusToFahrenheit(temperatureCelcius) + "°F")
console.log(temperatureFahrenheit + "°F " + " is " + FahrenheitToCelcius(temperatureFahrenheit) + "°C")