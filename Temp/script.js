// get user input //
var starttemp = parseInt(prompt ("What is the temperature(F)?"))
var temperature_unit = prompt ("Fahrenheit, Celsius or Kelvin?")

// convert starting temperature into Celsius //
var celtemp = (starttemp - 32) * (5 / 9)

// Convert starting temperature into Kelvin //
var keltemp = (starttemp -32) + 273.15

// display converted results ?/
console.log("Temp in C: " + celtemp)
console.log("Temp in K: " + keltemp)
