//19.	Calcular impuesto de ingresos
salario = 6300000
console.log("salario total=",salario)

if (salario < 1500000){
    tasa=0
    console.log("no aplica impuesto")
}

else if (salario <= 3000000){
    tasa=0.10
    console.log("aplica impuesto del 10%")
}
else (salario > 3000000){
    tasa=0.20
 console.log("aplica impuesto del 20%")
}

impuesto=salario*tasa
console.log("valor de impuesto=",impuesto)

neto=salario-impuesto
console.log("salario neto=", neto)