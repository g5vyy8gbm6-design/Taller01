
const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intentosRestantes = 5;

alert("Juego: adivina el numero");
alert("Tienes 5 intentos para acertar un numero entre 1 y 20.");

function preguntarNumero() {
    const entrada = prompt(`Intentos restantes: ${intentosRestantes}\nIngresa un numero entre 1 y 20:`);
    if (entrada === null) {
        alert("Juego cancelado.");
        return;
    }

    const apuesta = Number(entrada);
    if (!Number.isInteger(apuesta) || apuesta < 1 || apuesta > 20) {
        alert("Ingresa un numero entero entre 1 y 20.");
        preguntarNumero();
        return;
    }

    intentosRestantes--;

    if (apuesta === numeroSecreto) {
        alert(`¡Correcto! Adivinaste el numero ${numeroSecreto}.`);
        return;
    }

    if (apuesta < numeroSecreto) {
            alert("Muy bajo.");
    } else {
        alert("Muy alto.");
    }

    if (intentosRestantes > 0) {
        preguntarNumero();
    } else {
        alert(`Se te acabaron los intentos. El numero era ${numeroSecreto}.`);
    }
}

preguntarNumero();
