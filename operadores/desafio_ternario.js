const a = 10;
const b = 7;
const operacao = '/'; // + - * /

const resultado =
  operacao === '+'
    ? a + b
    : operacao === '-'
    ? a - b
    : operacao === '*'
    ? a * b
    : a / b;
console.log(resultado);
