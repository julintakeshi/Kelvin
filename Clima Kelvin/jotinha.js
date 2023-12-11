// 1
let kelvin = 293; // Variable to store the temperature in Kelvin for today's forecast.

// 2
// Explanation: A variable named "kelvin" is created and assigned the constant value of 293, representing today's temperature in Kelvin.

// 3
let celsius = kelvin - 273; // Variable to store the temperature in Celsius.

// 4
// Explanation: A variable named "celsius" is created to store the temperature in Celsius, which is obtained by subtracting 273 from the Kelvin value.

// 5
let fahrenheit = celsius * (9/5) + 32; // Variable to store the temperature in Fahrenheit.

// 6
// Explanation: A variable named "fahrenheit" is created to store the temperature in Fahrenheit, calculated using the given formula. We use a type of variable that allows value modification.

// 7
fahrenheit = Math.floor(fahrenheit); // Rounding down the Fahrenheit temperature.

// 8
// Explanation: The temperature in Fahrenheit is rounded down using the .floor() method of the Math object and stored back in the "fahrenheit" variable.

// 9
console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);

