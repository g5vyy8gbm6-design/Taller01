// solicitar usuario y contraseña
usuario="aprendiz"

contraseña = "1234"

u = prompt("ingrese su usuario:")
c = prompt("ingrese su contraseña:")



if (usuario == u && contraseña == c) {
    console.log("Bienvenido al sistema");
} else {
    console.log("Usuario o contraseña incorrectos");
}