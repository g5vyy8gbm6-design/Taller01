/*generar un numero aleatorio entre 1 - 10 y permitir adivinar hasta acertar ,
 dando pistas de si el numero a adivinar es mayor o menor*/
let numeroAdivinar = Math.floor(Math.random() * 10) + 1;
let adivinado = false;
while (!adivinado) {
    let numeroUsuario = parseInt(prompt("Adivina el numero entre 1 y 10:"));
    if (numeroUsuario === numeroAdivinar) {
        alert("Felicidades Has adivinado el numero.");
        adivinado = true;
    } else if (numeroUsuario < numeroAdivinar) {
        alert("El numero a adivinar es mayor. Intenta de nuevo.");
    } else {
        alert("El numero a adivinar es menor. Intenta de nuevo.");
    }   
}

 