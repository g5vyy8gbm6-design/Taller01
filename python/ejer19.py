#19.	Calcular impuesto de ingresos
salario = 6300000
print("salario total=",salario)

if salario < 1500000:
    tasa=0
    print("no aplica impuesto")

elif salario <= 3000000:
    tasa=0.10
    print("aplica impuesto del 10%")
elif salario > 3000000:
    tasa=0.20
    print("aplica impuesto del 20%")

impuesto=salario*tasa
print("valor de impuesto=",impuesto)

neto=salario-impuesto
print("salario neto=", neto)
