//ordenar un arreglo de menor a mayor (cualquier metodo)
let numeros = [5, 2, 8, 1, 9];
numeros.sort((a, b) => a - b);
console.log(numeros);
//otra forma de ordenar un arreglo de menor a mayor
numeros = [5, 2, 8, 1, 9];
let numeros_ordenados = [...numeros].sort((a, b) => a - b);
console.log(numeros_ordenados);