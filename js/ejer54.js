//mostrar usuarios mayor de edad
const usuarios = [
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 17 },
    { nombre: 'María', edad: 19 },
    { nombre: 'Pedro', edad: 16 }
];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
        console.log(usuarios[i].nombre);
    }
}

