//Mostrar menú:
nombre = prompt("Ingrese su nombre:");
menu="bienvenido al sistema " + nombre;
fecha = new Date();
menu += "\nFecha: " + fecha.toLocaleDateString();
menu += "\nHora: " + fecha.toLocaleTimeString();

alert(menu)


cliente = prompt("Seleccione el tipo de cliente: \n1. Cliente Regular \n2. Cliente VIP");

switch (cliente) {
    case "1":
        alert("Has seleccionado Cliente Regular tienes un descuento del 5%");

}

        switch (cliente) {
    case "2":
        alert("Has seleccionado Cliente VIP tienes un descuento del 20%");}



