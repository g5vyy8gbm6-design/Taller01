#registrar 5 notas, calcular promedio y determinar estado
notas = []
for i in range(5):
    nota = float(input(f"Ingrese la nota {i+1}: "))
    notas.append(nota)
promedio = sum(notas) / len(notas)
print(f"El promedio es: {promedio:.2f}")
if promedio >= 7:
    print("Estado: Aprobado")
elif promedio >= 4:
    print("Estado: Regular")
else:
    print("Estado: Reprobado")
    