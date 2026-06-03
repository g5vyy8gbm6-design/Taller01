//generar fibonacci hasta el N terminos 
function fibonacci(n) {
    let a = 0, b = 1;   
    for (let i = 0; i < n; i++) {
        process.stdout.write(a + ' ');
        [a, b] = [b, a + b];
    }   
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Ingrese el número de términos de Fibonacci a generar: ', (n) => {
    fibonacci(parseInt(n));
    readline.close();
});
