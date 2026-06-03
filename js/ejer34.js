//solicitar N y sumar del 1 al N
let N = parseInt(prompt("Ingrese un numero entero positivo: "));
let suma = 0;   
for (let i = 1; i <= N; i++) {
    suma += i;
}
alert(`La suma del 1 al ${N} es: ${suma}`);   

