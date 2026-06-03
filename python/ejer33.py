#  solicitar numero y mostrar su tabla de multiplicar del 1 al 10
numero = int(input("Ingrese un numero para mostrar su tabla de multiplicar del 1 al 10: "))
print(f"Tabla de multiplicar del {numero}")
for i in range(1, 11):
    resultado = numero * i
    print(f"{numero} x {i} = {resultado}")

        
