#crear menu CRUD en arreglo
def menu():
    print("1.agregar")
    print("2. listar")
    print("3. actualizar")
    print("4. eliminar")
    print("5. salir")
def agregar(arreglo):
    elemento = input("ingrese el elemento a agregar: ")
    arreglo.append(elemento)
def listar(arreglo):
    for i in range(len(arreglo)):
        print(f"{i}. {arreglo[i]}")

def actualizar(arreglo):
    listar(arreglo)
    indice = int(input("ingrese el indice del elemento a actualizar: "))
    if 0 <= indice < len(arreglo):
        nuevo_valor = input("ingrese el nuevo valor: ")
        arreglo[indice] = nuevo_valor
    else:
        print("indice no valido")
def eliminar(arreglo):
    listar(arreglo)
    indice = int(input("ingrese el indice del elemento a eliminar: "))
    if 0 <= indice < len(arreglo):
        arreglo.pop(indice)
    else:
        print("indice no valido")
def main():
    arreglo = []
    while True:
        menu()
        opcion = input("ingrese una opcion: ")
        if opcion == "1":
            agregar(arreglo)
        elif opcion == "2":
            listar(arreglo)
        elif opcion == "3":
            actualizar(arreglo)
        elif opcion == "4":
            eliminar(arreglo)
        elif opcion == "5":
            print("saliendo...")
            break
        else:
            print("opcion no valida")
if __name__ == "__main__":    main()

    