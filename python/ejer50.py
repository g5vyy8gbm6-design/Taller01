#eliminar elementos duplicados 
def eliminar_duplicados(arreglo):
    return list(set(arreglo))

array = [1, 2, 3, 4, 5, 1, 2, 3]
unique_array = eliminar_duplicados(array)
print(unique_array)  # Output: [1, 2, 3, 4, 5]  