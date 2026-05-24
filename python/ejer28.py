#solicitar nota del (0 al 5) y clasificar
nota=int(input("Ingrese la nota del estudiante (0-5): "))

if nota>=0 and nota<3:
    print("Reprobado")
elif nota>=3 and nota<3.99:
    print("Aprobado")
elif nota>=4 and nota<4.49:
    print("bueno")
elif nota>=4.5 and nota<=5:
    print("Excelente")