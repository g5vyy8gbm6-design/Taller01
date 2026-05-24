#solicitar un numero del mes (1-12) y mostrar la estacion del año (definir claramente las estaciones)

mes = int(input("Ingrese un numero del mes (1-12): "))
if mes == 12 or mes == 1 or mes == 2:
    print("la estacion es invierno")
elif mes == 3 or mes == 4 or mes == 5:
    print("la estacion es primavera")
elif mes == 6 or mes == 7 or mes == 8:
    print("la estacion es verano")
elif mes == 9 or mes == 10 or mes == 11:
    print("la estacion es otoño")