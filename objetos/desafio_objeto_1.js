// Objeto Data
// Atributos: dia, mes e ano
// Metodo: exibir -> "dia/mes/ano"

const data = {
  dia: 13,
  mes: 10,
  ano: 2005,
  funcao: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.funcao());
