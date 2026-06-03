#buscar un numero y mostrar su posicion o indicar que no se encuentra
numeros = [10, 20, 30, 40, 50]
numero_buscado = 30
posicion = -1

for i in range(len(numeros)):
    if numeros[i] == numero_buscado:
        posicion = i
        break

if posicion != -1:
    print(f"El número {numero_buscado} se encuentra en la posición {posicion}.")
else:
    print(f"El número {numero_buscado} no se encuentra en el arreglo.")