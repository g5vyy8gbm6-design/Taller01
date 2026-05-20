lado1=5
lado2=5
lado3=10

#determinar el tipo de triangulo

if lado1==lado2 and lado2==lado3:
    print("tríangulo equilátero")

elif lado1==lado2 | lado1==lado3 | lado2==lado3:
    print("tríangulo isósceles")

else:
    print("tríangulo escaleno")
