/*solicitar un numero del mes (1-12) y mostrar la estacion del año (definir claramente las estaciones)*/

let mes = parseInt(prompt("Ingrese un numero del mes (1-12)"));

if (mes >= 1 && mes <= 12) {
}
    if (mes >= 3 && mes <= 5) {
        alert("La estación es primavera.");
    } else if (mes >= 6 && mes <= 8) {
        alert("La estación es verano.");
    } else if (mes >= 9 && mes <= 11) {
        alert   ("La estación es otoño.");
    } else {
        alert("La estación es invierno.");

}