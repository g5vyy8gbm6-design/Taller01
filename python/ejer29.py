#solicitar 3 numeros y mostrarlos en orden ascendente
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))
num3 = float(input("Ingrese el tercer número: "))

numeros = [num1, num2, num3]
numeros.sort()

print("Los números en orden ascendente son:", numeros)
