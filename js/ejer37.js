// generar fibonacci hasta el N terminos
function fibonacci(n) {
    let a = 0, b = 1;
    let resultado = '';
    for (let i = 0; i < n; i++) {
        resultado += a + ' ';
        [a, b] = [b, a + b];
    }
    return resultado.trim();
}

function ejecutarFibonacci() {
    const entrada = prompt('Ingrese el número de términos de Fibonacci a generar:');
    const num = parseInt(entrada, 10);
    if (isNaN(num) || num < 0) {
        alert('Número inválido. Ingresa un número entero mayor o igual a 0.');
        return;
    }
    const serie = fibonacci(num);
    const output = document.getElementById('output');
    if (output) {
        output.textContent = serie || 'No se generaron términos.';
    } else {
        document.body.append('Resultado: ' + (serie || 'No se generaron términos.'));
    }
}

document.addEventListener('DOMContentLoaded', ejecutarFibonacci);
