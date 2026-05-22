//Solicitar salario base y horas extra: 

salarioBase = 6700000; // Salario base mensual
horasExtra = 48; // Horas extra trabajadas

//Calcular el pago por horas extra (1.5 veces el salario base por hora)
calculodeh = horasExtra * (salarioBase / 30) 
pago_de_horas_extra = ( calculodeh / 8 )  * 1.5;                                


//Calcular el salario total
salarioTotal = salarioBase + pago_de_horas_extra;            
//Mostrar el resultado
console.log("El salario total es: " + salarioTotal);