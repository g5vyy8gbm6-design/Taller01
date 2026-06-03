#registrar usuarios (nommbre y edad ) en arreglo
usuarios = []

def registrar_usuario(nombre, edad):
    usuarios.append({'nombre': nombre, 'edad': edad})

def mostrar_usuarios():
    for usuario in usuarios:
        print(f"Nombre: {usuario['nombre']}, Edad: {usuario['edad']}")
# Ejemplo de uso
registrar_usuario("Alice", 30)
registrar_usuario("Bob", 25)
mostrar_usuarios()  

