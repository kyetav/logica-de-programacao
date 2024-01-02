// const nota1 = 7.8;
// const nota2 = 3.1;
// const nota3 = 6.7;

// function descobrirNotaPequena(nota1, nota2, nota3) {
//   if (nota1 >= nota2 && nota2 >= nota3) {
//     return nota1 + nota2 + nota3 / 2;
//   }
//   if (nota2 >= nota1 && nota2 >= nota3) {
//     return nota1 + nota2 + nota3 / 2;
//   }
//   if (nota3 >= nota1 && nota3 >= nota2) {
//     return nota1 + nota2 + nota3 / 2;
//   }
// }

// console.log(descobrirNotaPequena(nota1, nota2, nota3));

const nota1 = 7.8;
const nota2 = 8.1;
const nota3 = 6.7;

function min(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
  const menorNota = min(nota1, min(nota2, nota3));

  if (menorNota === n1) {
    return (n1 + n3) / 2;
  } else if (menorNota == n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

function mediaParaStatus(media) {
  if (media >= 7) {
    return 'Aprovado!';
  } else if (media >= 4) {
    return 'Reculperacao';
  } else {
    return 'Reprovado';
  }
}

const mediaFinal = min(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(
  `O resultado final do aluno e ${mediaFinal}, e ele esta ${statusFinal}`
);
