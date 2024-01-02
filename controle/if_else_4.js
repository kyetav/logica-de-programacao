const hora = 23.53;
let saudacao;

if (hora < 12) {
  saudacao = 'Bom dia!';
} else {
  if (hora < 18) {
    saudacao = 'Boa tarde!';
  } else {
    if (hora < 23) {
      saudacao = 'Boa noite!';
    } else {
      saudacao = 'Muito tarde!';
    }
  }
}

console.log(saudacao);
