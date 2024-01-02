function criarData(dia, mes, ano) {
  return {
    dia,
    mes,
    ano,
    funcao() {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(6, 10, 2004);

console.log(d1.funcao());
console.log(d2.funcao());
console.log(d3.funcao());
