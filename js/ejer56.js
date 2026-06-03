//simular carrito de compras (agregar productos y calcular total)
const carrito = [];

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
}   

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}
agregarProducto('Camisa', 25);
agregarProducto('Pantalón', 40);
agregarProducto('Zapatos', 60); 
console.log('Total a pagar: $' + calcularTotal());
        