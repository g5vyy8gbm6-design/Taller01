//Solicitar tres números e indicar el mayor. 
n1=250
n2=40 
n3=20
//condicional para encontrar el mayor
if(n1>=n2 &&n1>=n3){
    mayor=n1;
    
}else if( n2>=n1&&n2>=n3){
    mayor=n2;

}else{
    mayor=n3;
}
console.log("el numero mayor es",mayor);