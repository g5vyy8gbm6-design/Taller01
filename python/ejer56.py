#simular carrito de compras (agregar productos y calcular total)
class Carrito:
    def __init__(self):
        self.productos = []
    
    def agregar_producto(self, nombre, precio):
        self.productos.append({'nombre': nombre, 'precio': precio})
    
    def calcular_total(self):
        total = sum(producto['precio'] for producto in self.productos)
        return total
# Ejemplo de uso
carrito = Carrito() 
carrito.agregar_producto('Manzana', 1000)
carrito.agregar_producto('Pan', 400)
total = carrito.calcular_total()
print(f'Total a pagar: ${total:.2f}')
