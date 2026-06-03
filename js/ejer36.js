// solicitar N numeros y contar cuantos son positivos 
let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar:"));
let contadorPositivos = 0;

for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseInt(prompt("Ingrese un numero:"));
    if (numero > 0) {
        contadorPositivos++;
    }
}
document.write("La cantidad de numeros positivos ingresados es: " + contadorPositivos); 

