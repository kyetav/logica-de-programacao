function executar(parametro) {
  if (typeof parametro === 'function') {
    console.log(parametro()); // <-- Central da aula
  }
}

function bomDia() {
  return 'Bom dia';
}

executar(3);
executar(bomDia);

const x = bomDia;
const y = bomDia(); // <- Central da aula

console.log(x());
