//buscar un numero y mostrar su posicion o indicar que no se encuentra
let numeros = [10, 20, 30, 40, 50];
let numeroBuscado = 30;
let posicion = -1;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        posicion = i;
        break;
    }

}
if (posicion !== -1) {
    console.log(`El número ${numeroBuscado} se encuentra en la posición ${posicion}.`);
} else {
    console.log(`El número ${numeroBuscado} no se encuentra en el arreglo.`);
}
