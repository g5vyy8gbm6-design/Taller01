#validar contraseña
def validar_contraseña(contraseña):
    if len(contraseña) < 8:
        return False
    if not any(char.isupper() for char in contraseña):
        return False
    if not any(char.islower() for char in contraseña):
        return False
    if not any(char.isdigit() for char in contraseña):
        return False
    if not any(char in "!@#$%^&*()-_=+[]{}|;:'\",.<>?/" for char in contraseña):
        return False
    return True
contraseña = input("Ingrese una contraseña: ")
if validar_contraseña(contraseña):
    print("Contraseña válida.")
else:    print("Contraseña inválida. Debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.")

