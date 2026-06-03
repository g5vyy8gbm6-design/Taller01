
const candidates = {
  1: 'Paloma Valencia',
  2: 'Abelardo de la Espriella',
  3: 'Ivan Cepeda'
};

const counts = {1: 0, 2: 0, 3: 0};

function preguntarEntero(text) {
  const entrada = prompt(text);
  if (entrada === null) return null; // cancelado
  const n = Number(entrada.trim());
  if (Number.isInteger(n)) return n;
  return NaN;
}

alert('Sistema de votación: elige un candidato por número. Se mostrarán resultados al final.');
let votantes = preguntarEntero('¿Cuántos votantes hay?');
if (votantes === null) {
  console.log('Operación cancelada por el usuario.');
} else {
  while (!Number.isInteger(votantes) || votantes <= 0) {
    votantes = preguntarEntero('Ingresa un número válido de votantes:');
    if (votantes === null) {
      console.log('Operación cancelada por el usuario.');
      break;
    }
  }

  if (votantes !== null) {
    for (let i = 1; i <= votantes; i++) {
      let opcion = prompt(`Votante ${i}:\n1. ${candidates[1]}\n2. ${candidates[2]}\n3. ${candidates[3]}\nIngresa 1, 2 o 3 para votar (o deja vacío para abstenerse):`);
      if (opcion === null) {
        console.log('Usuario canceló durante la votación.');
        break;
      }
      opcion = opcion.trim();
      if (opcion === '') {
        console.log(`Votante ${i}: abstención.`);
        continue;
      }
      const num = Number(opcion);
      if (![1,2,3].includes(num)) {
        alert('Opción inválida. Se volverá a pedir el voto.');
        i--;
        continue;
      }
      counts[num]++;
      console.log(`Votante ${i}: voto para ${candidates[num]}`);
    }

    // Mostrar resultados
    console.log('\nResultados:');
    for (const k of [1,2,3]) {
      console.log(`${candidates[k]}: ${counts[k]} voto(s)`);
    }

    const maxVotes = Math.max(counts[1], counts[2], counts[3]);
    const winners = Object.keys(counts).filter(k => counts[k] === maxVotes && maxVotes > 0);

    if (maxVotes === 0) {
      alert('No se registraron votos.');
    } else if (winners.length === 1) {
      alert(`Ganador: ${candidates[winners[0]]} con ${maxVotes} voto(s).`);
    } else {
      const names = winners.map(k => candidates[k]).join(', ');
      alert(`Empate entre: ${names} con ${maxVotes} voto(s) cada uno.`);
    }
  }
}
