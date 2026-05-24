//solicitar 3 numeros y mostrarlos en orden ascendente
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:")); 
let numeros = [num1, num2, num3];
numeros.sort(function(a, b) {
  return a - b;
});
alert("Los números en orden ascendente son: " + numeros.join(", "));
