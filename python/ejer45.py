#calcular promedio del arreglo
numeros = [10, 20, 30, 40, 50]
suma = 0
for i in range(len(numeros)):
    suma += numeros[i]
promedio = suma / len(numeros)
print("El promedio es: " + str(promedio))
    