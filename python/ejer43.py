#encontrar el nunmero mayor de un arreglo
def mayor(arreglo):
    mayor=arreglo[0]
    for i in range(1,len(arreglo)):
        if arreglo[i]>mayor:
            mayor=arreglo[i]
    return mayor
arreglo=[1,20,3,4,5]
print(mayor(arreglo))