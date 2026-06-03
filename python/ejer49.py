#invertir arreglo
def invertir_arreglo(arreglo):
    arreglo_invertido = []
    for i in range(len(arreglo)-1, -1, -1):
        arreglo_invertido.append(arreglo[i])
    return arreglo_invertido

arreglo = [1, 2, 3, 4, 5]
arreglo_invertido = invertir_arreglo(arreglo)
print(arreglo_invertido)