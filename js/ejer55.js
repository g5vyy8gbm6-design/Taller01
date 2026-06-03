//calcular: mayor, menor y promedio de un arreglo 
function calcularArreglo(arreglo) {
    const mayor = Math.max(...arreglo);
    const menor = Math.min(...arreglo);
    const promedio = arreglo.reduce((a, b) => a + b, 0) / arreglo.length;
    return { mayor, menor, promedio };
}

//ejemplo de uso
const arreglo = [5, 3, 8, 1, 4];
const { mayor, menor, promedio } = calcularArreglo(arreglo);
console.log(`Mayor: ${mayor}, Menor: ${menor}, Promedio: ${promedio}`);
