#validar acceso

usuario="admin"

contraseña = "1234"

u = input("ingrese su usuario:")
c = input("ingrese su contraseña:")



if usuario == u and contraseña == c:
    print("Bienvenido al sistema", u, " su rol es: administrador")
else:
    print("Usuario o contraseña incorrectos")
