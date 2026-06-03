#generar fibonacci hasta el N terminos 
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b
n = int(input("Ingrese el número de términos de Fibonacci a generar: "))
fibonacci(n)        
