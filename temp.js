//n = newton
//f = farheinheit
//c = celcius
//kelvin temp and it is constant
const k = 293
//celcius converter
let c = k - 273
console.log(`The temperature in celcius is ${c}.`)
//converting to fahrenheit
let f = c * (9/5) +32

//rounding the value
f = Math.floor(f)
console.log(`The temperature is ${f} degrees Fahrenheit.`)
//converting the celcius into newton scale
let n = c * (33/100)
//rounding the result of n and printing the value of newton
console.log(Math.floor(n))




