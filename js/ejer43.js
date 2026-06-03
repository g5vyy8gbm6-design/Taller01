//encontrar el nunmero mayor de un arreglo
let arreglo = [1, 20, 3, 4, 50];
let mayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
}

console.log("El número mayor es: " + mayor);