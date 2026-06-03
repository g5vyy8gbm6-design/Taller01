//solicitar numero y calcular su factorial
let numero = parseInt(prompt("Ingrese un numero para calcular su factorial:"));
let factorial = 1;  
if (numero < 0) {
    document.write("El factorial no esta definido para numeros negativos.");
} else if (numero === 0 || numero === 1) {
    document.write("El factorial de " + numero + " es 1.");
} else {
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    document.write("El factorial de " + numero + " es: " + factorial);
}   
