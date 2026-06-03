#solicitar numero y calcular su factorial
numero = int(input("Ingrese un número para calcular su factorial: "))
factorial = 1

if numero < 0:
    print("El factorial no está definido para números negativos.")
elif numero == 0 or numero == 1:
    print(f"El factorial de {numero} es 1.")
else:
    for i in range(2, numero + 1):
        factorial *= i
    print(f"El factorial de {numero} es: {factorial}")