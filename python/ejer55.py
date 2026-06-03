#calcular: mayor, menor y promedio de un arreglo 
def calcular_arreglo(arreglo):
    mayor = max(arreglo)
    menor = min(arreglo)
    promedio = sum(arreglo) / len(arreglo)
    return mayor, menor, promedio
#ejemplo de uso
arreglo = [5, 3, 8, 1, 4]
mayor, menor, promedio = calcular_arreglo(arreglo)
print(f"Mayor: {mayor}, Menor: {menor}, Promedio: {promedio}")