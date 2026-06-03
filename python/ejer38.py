#generar un numero aleatorio entre 1 - 10 y permitir adivinar hasta acertar , dando pistas de si el numero a adivinar es mayor o menor
import random

numero_secreto = random.randint(1, 10)
intentos = 0

while True:
    intento = int(input("Adivina el número (entre 1 y 10): "))
    intentos += 1

    if intento == numero_secreto:
        print(f"¡Acertaste! El número era {numero_secreto}. Lo lograste en {intentos} intentos.")
        break
    elif intento < numero_secreto:
        print("El número es mayor.")
    else:
        print("El número es menor.")

        