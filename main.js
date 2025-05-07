// The forecast today is 293 Kelvin.
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin.
// Convert Kelvin to Celsius.
const celsius = kelvin - 273;

// Use the equation to convert Celsius to Fahrenheit.
// Use let since we will round this value later.
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature using Math.floor.
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra Practice:
// Convert Celsius to Newton scale.
let newton = celsius * (33 / 100);

// Round down the Newton temperature.
newton = Math.floor(newton);

// Log the temperature in Newton using string interpolation.
console.log(`The temperature is ${newton} degrees Newton.`);

