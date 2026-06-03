
const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intentosRestantes = 5;

console.log("Juego: adivina el número");
console.log("Tienes 5 intentos para acertar un número entre 1 y 20.");

function preguntarNumero() {
    const entrada = prompt(`Intentos restantes: ${intentosRestantes}\nIngresa un número entre 1 y 20:`);
    if (entrada === null) {
        console.log("Juego cancelado.");
        return;
    }

    const apuesta = Number(entrada);
    if (!Number.isInteger(apuesta) || apuesta < 1 || apuesta > 20) {
        console.log("Ingresa un número entero entre 1 y 20.");
        preguntarNumero();
        return;
    }

    intentosRestantes--;

    if (apuesta === numeroSecreto) {
        console.log(`¡Correcto! Adivinaste el número ${numeroSecreto}.`);
        return;
    }

    if (apuesta < numeroSecreto) {
        console.log("Muy bajo.");
    } else {
        console.log("Muy alto.");
    }

    if (intentosRestantes > 0) {
        preguntarNumero();
    } else {
        console.log(`Se te acabaron los intentos. El número era ${numeroSecreto}.`);
    }
}

preguntarNumero();
