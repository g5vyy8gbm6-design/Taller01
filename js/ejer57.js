//validar contraseña
function validarContraseña() {
    const contraseñaInput = document.getElementById("contraseña");
    const mensaje = document.getElementById("mensaje");

    if (!contraseñaInput || !mensaje) {
        console.error("No se encontraron los elementos #contraseña o #mensaje.");
        return;
    }

    const contraseña = contraseñaInput.value;
    if (contraseña.length < 8) {
        mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Contraseña válida.";
        mensaje.style.color = "green";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    const contraseñaInput = document.getElementById("contraseña");
    if (contraseñaInput) {
        contraseñaInput.addEventListener("input", validarContraseña);
        contraseñaInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                validarContraseña();
            }
        });
    }
});

