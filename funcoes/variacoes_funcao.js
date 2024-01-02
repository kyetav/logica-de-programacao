// #1 - Funcao com Paramentros e com retorno

function somar(a, b) {
  return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final e: ${resultado}`);
console.log(`O resultado final e: ${somar(50, 36)}`);

// #2 - Funcao com Parametros e sem retorno

function exibirMultiplicacao(a, b) {
  console.log(a * b);
}

// #3 - Funcao sem Parametros e com retorno

function retornarDataAtual() {
  return new Date();
}

console.log(retornarDataAtual());

// #4 - Funcao sem Parametros e sem retorno

function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
