import random

print("Juego: adivina el número")
print("Tienes 5 intentos para adivinar un número entre 1 y 20.")

numero_secreto = random.randint(1, 20)
intentos = 5

for intento in range(1, intentos + 1):
    try:
        apuesta = int(input(f"Intento {intento}/{intentos}. Ingresa un número: "))
    except ValueError:
        print("Debes ingresar un número entero.")
        continue

    if apuesta == numero_secreto:
        print(f"¡Correcto! Adivinaste el número en {intento} intento(s).")
        break
    elif apuesta < numero_secreto:
        print("Muy bajo.")
    else:
        print("Muy alto.")

    if intento == intentos:
        print(f"Se te acabaron los intentos. El número era {numero_secreto}.")
