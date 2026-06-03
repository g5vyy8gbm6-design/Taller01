#solicitar N numeros y contar cuantos son positivos 
def contar_positivos(numeros):
    contador = 0
    for numero in numeros:
        if numero > 0:
            contador += 1
    return contador 
def main():
    numeros = []
    n = int(input("Ingrese la cantidad de números que desea ingresar: "))
    for i in range(n):
        numero = float(input(f"Ingrese el número {i+1}: "))
        numeros.append(numero)
    cantidad_positivos = contar_positivos(numeros)
    print(f"La cantidad de números positivos es: {cantidad_positivos}") 
if __name__ == "__main__":    main()

