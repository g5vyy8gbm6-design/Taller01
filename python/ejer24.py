#solicitar año e indicar si es bisiesto
año = 2020    # Año a evaluar

#evaluar si el año es bisiesto o no
if (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0):
    print(str(año) + " es un año bisiesto.")
else:    
    print(str(año) + " no es un año bisiesto.")
