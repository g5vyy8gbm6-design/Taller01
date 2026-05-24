//validar acceso

usuario="admin"

contrasena = "1234"

u = prompt("ingrese su usuario:")
c = prompt("ingrese su contraseña:")



if (usuario == u && contrasena == c) {
    alert("Bienvenido al sistema"+u+", su rol es: administrador");
} else {
    alert("Usuario o contraseña incorrectos");
}
