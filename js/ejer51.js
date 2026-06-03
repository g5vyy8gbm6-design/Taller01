//registrar 5 notas, calcular promedio y determinar estado
let notas = [];
let suma = 0;
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    notas.push(nota);
    suma += nota;
}
let promedio = suma / notas.length;
let estado = "";    
if (promedio >= 7) {
    estado = "Aprobado";
}
else if (promedio >= 4) {
    estado = "Regular";
}
else {
    estado = "Reprobado";
}
document.write(`Promedio: ${promedio.toFixed(2)}`);
document.write(`Estado: ${estado}`);   
