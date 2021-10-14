/* This Project converts a constant Temperature from degree Kelvin:
    1. degree Celcius (C)
    2. degree Fahrenheit (F)
    3. degree Newton (N)

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

const kelvin = 293;  // Today's forecast in K

let celsius = kelvin - 273;  // converting from K to C

let fahrenheit = celsius * (9/5) + 32;  // converting from C to F

fahrenheit = Math.floor(fahrenheit);  // rounding down for integer values

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);  // Display to console

// Extra

let newton = celsius * (33/100);  // Converting from C to N

newton = Math.floor(newton);  // rounding down for integer value

console.log(`The temperature is ${newton} degrees Newton`);  // display to console



// End of Code