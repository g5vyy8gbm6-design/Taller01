#Mostrar menú:
nombre = input("Ingrese su nombre:")

bienvenida ="Bienvenido al sistema " + nombre 
print(bienvenida)

#Mostrar opciones:
print("1. cliente normal")    
print("2. cliente vip")

opcion = int(input("Ingrese su opción:"))

if opcion == 1:
    print("Usted es un cliente normal, su descuento es del 5%")

elif opcion == 2:
    print("Usted es un cliente vip, su descuento es del 20%")