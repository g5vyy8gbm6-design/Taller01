#contar cuantos numeros pares hay
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
contador_pares = 0
for numero in numeros:
    if numero % 2 == 0:
        contador_pares += 1 
print("Cantidad de números pares: " + str(contador_pares))
    