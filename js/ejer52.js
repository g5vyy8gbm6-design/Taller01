//crear menu CRUD en arreglo
let menu = ["Crear", "Leer", "Actualizar", "Eliminar"];

//funcion para mostrar el menu
function mostrarMenu() {
    const container = document.getElementById('menu-container');
    if (!container) {
        console.log('No se encontró contenedor de menú en el DOM.');
        return;
    }
    container.innerHTML = '';
    for (let i = 0; i < menu.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = `${i + 1}. ${menu[i]}`;
        btn.style.margin = '4px';
        btn.addEventListener('click', () => seleccionarOpcion(i + 1));
        container.appendChild(btn);
    }
}

//funcion para seleccionar una opcion del menu
function seleccionarOpcion(opcion) {
    switch (opcion) {
        case 1:
            mostrarResultado('Opción "Crear" seleccionada');
            break;
        case 2:
            mostrarResultado('Opción "Leer" seleccionada');
            break;
        case 3:
            mostrarResultado('Opción "Actualizar" seleccionada');
            break;
        case 4:
            mostrarResultado('Opción "Eliminar" seleccionada');
            break;
        default:
            mostrarResultado('Opción no válida');
    }
}

function mostrarResultado(text) {
    console.log(text);
    const out = document.getElementById('output');
    if (out) out.textContent = text;
}

document.addEventListener('DOMContentLoaded', mostrarMenu);
