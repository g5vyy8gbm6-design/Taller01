lado1=5
lado2=10
lado3=15

 //Determinar el tipo de triángulo
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
         console.log("El triángulo Isósceles");
 } else {
     console.log("El triángulo Escaleno");
                }
