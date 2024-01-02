const d1 = {
  dia: 13,
  mes: 10,
  ano: 2005,
  funcao: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};
const d2 = {
  dia: 5,
  mes: 5,
  ano: 2007,
  funcao: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};
const d3 = {
  dia: 6,
  mes: 10,
  ano: 2004,
  funcao: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(d1.funcao());
console.log(d2.funcao());
console.log(d3.funcao());
