#encontrar el numero menor de un arreglo
numeros = [5, 3, 8, 1, 4]
menor = numeros[0]
for i in range(1, len(numeros)):
    if numeros[i] < menor:
        menor = numeros[i]
print("El número menor es:", menor)
    