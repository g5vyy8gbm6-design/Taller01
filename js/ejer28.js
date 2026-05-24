//solicitar nota del (0 al 5) y clasificar
let nota = parseInt(prompt("Ingrese la nota del estudiante (0-5): "));

if (nota >= 0 && nota < 3) {
    alert("Reprobado");
} else if (nota >= 3 && nota < 4) {
    alert("Aprobado");
} else if (nota >= 4 && nota < 4.5) {
    alert("Bueno");
} else if (nota >= 4.5 && nota <= 5) {
    alert("Excelente");
} 
