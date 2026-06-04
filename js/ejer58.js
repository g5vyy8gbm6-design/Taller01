
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
}

// Mostrar resultado en la página
const pre = document.createElement('pre');
pre.style.fontFamily = 'monospace';
pre.style.fontSize = '16px';
for (let i = 0; i < matriz.length; i++) {
    pre.textContent += matriz[i].join(' ') + '\n';
}
document.body.appendChild(pre);

