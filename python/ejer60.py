
candidates = {
    "1": "Paloma Valencia",
    "2": "Abelardo de la Espriella",
    "3": "Ivan Cepeda"
}

counts = {key: 0 for key in candidates}

def pedir_entero(prompt_text):
    while True:
        try:
            v = input(prompt_text).strip()
            if v == "":
                print("Entrada vacía. Intenta de nuevo.")
                continue
            n = int(v)
            return n
        except ValueError:
            print("Por favor ingresa un número entero.")

print("Sistema de votación: elige un candidato por número.")
print("Opciones:")
for k, name in candidates.items():
    print(f"  {k}. {name}")

votantes = pedir_entero("¿Cuántos votantes hay? ")

for i in range(1, votantes + 1):
    print(f"\nVotante {i}:")
    while True:
        opcion = input("Ingresa 1, 2 o 3 para votar (o 'x' para abstenerse): ").strip()
        if opcion.lower() == 'x':
            print("Abstención registrada.")
            break
        if opcion in candidates:
            counts[opcion] += 1
            print(f"Voto registrado para {candidates[opcion]}")
            break
        print("Opción inválida. Intenta de nuevo.")

print("\nResultados:")
for k, name in candidates.items():
    print(f"  {name}: {counts[k]} voto(s)")

max_votes = max(counts.values())
winners = [candidates[k] for k, v in counts.items() if v == max_votes]

if max_votes == 0:
    print("No se registraron votos.")
elif len(winners) == 1:
    print(f"\nGanador: {winners[0]} con {max_votes} voto(s).")
else:
    print("\nEmpate entre:")
    for w in winners:
        print(f" - {w}")
    print(f"con {max_votes} voto(s) cada uno.")
