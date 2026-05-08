#Solicitar un número e indicar si es positivo, 
# negativo o cero. 
numero=float(input("introduce un numero"))
#ponemos la condicion 
if numero> 0:
    print("El número es positivo.")
elif numero < 0:
    print("El número es negativo.")
else:
    print("El número es cero.")