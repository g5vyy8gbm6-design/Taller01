//registrar usuarios (nommbre y edad ) en arreglo
let usuarios = [];

function registrarUsuario() {
    let nombre = prompt("Ingrese el nombre del usuario:");
    let edad = parseInt(prompt("Ingrese la edad del usuario:"));    
    usuarios.push({ nombre, edad });
}

function mostrarUsuarios() {
    document.write("Usuarios registrados:");
    usuarios.forEach((usuario, index) => {
        document.write(`${index + 1}. Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
    });
}
// Ejemplo de uso
registrarUsuario();
registrarUsuario();
mostrarUsuarios();

