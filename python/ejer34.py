#solicitar N y sumar del 1 al N
N = int(input("Ingrese un número entero positivo: "))
suma = 0
for i in range(1, N + 1):
    suma += i
print(f"La suma del 1 al {N} es: {suma}")   
