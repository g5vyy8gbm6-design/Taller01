//encontrar el numero menor de un arreglo
let numeros = [5, 3, 8, 1, 4];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log("El número menor es: " + menor);
