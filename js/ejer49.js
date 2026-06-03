//invertir arreglo
function invertirArreglo(arreglo) {
    let arregloInvertido = [];  
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);

    }
    return arregloInvertido;
}

let arreglo = [1, 2, 3, 4, 5];
let arregloInvertido = invertirArreglo(arreglo);
console.log(arregloInvertido);
