//contar cuantos numeros pares hay
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contadorPares = 0;  
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    contadorPares++;
  }
}
console.log("Cantidad de números pares: " + contadorPares);
