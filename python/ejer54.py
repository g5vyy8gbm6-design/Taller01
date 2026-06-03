#mostrar usuarios mayor de edad
usuarios = [
    {"nombre": "Juan", "edad": 25}, 
    {"nombre": "María", "edad": 17},
    {"nombre": "Pedro", "edad": 30},
    {"nombre": "Ana", "edad": 15},
    {"nombre": "Luis", "edad": 20}
]
for usuario in usuarios:
    if usuario["edad"] >= 18:
        print(usuario["nombre"])
                