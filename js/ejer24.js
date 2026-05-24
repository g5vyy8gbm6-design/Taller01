//solicitar al usuario un año
año = 2020 //año a evaluar

//evaluar si un año es bisiesto o no

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        console.log(año + " es un año bisiesto.");
    } else {
        console.log(año + " no es un año bisiesto.");
    }