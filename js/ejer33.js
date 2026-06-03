//solicitar numero y mostrar su tabla de multiplicar del 1 al 10
let numero = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar del 1 al 10:"));   
document.write("<h2>Tabla de multiplicar del " + numero + "</h2>");
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
}