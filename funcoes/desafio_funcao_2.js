// // Parametro(Nota) -> Retorno (Conceito)

function nota(nota) {
  if (nota === 10) {
    return 'A+';
  }
  if (nota === 9) {
    return 'A';
  }
  if (nota === 8) {
    return 'B+';
  }
  if (nota === 7) {
    return 'B';
  }
  if (nota === 6) {
    return 'C+';
  }
  if (nota === 5) {
    return 'C';
  }
  if (nota === 4) {
    return 'D+';
  }
  if (nota === 3) {
    return 'D';
  }
  if (nota === 2) {
    return 'E+';
  }
  if (nota === 1) {
    return 'E';
  }
  if (nota === 0) {
    return 'F';
  }

  if (nota < 0 || nota > 10) {
    return 'Não é uma nota válida';
  }
}

console.log(nota(5));

// function notaParaConceito(nota) {
//   switch (Math.ceil(nota)) {
//     case 10:
//       return 'A+';
//     case 9:
//       return 'A';
//     case 8:
//       return 'B+';
//     case 7:
//       return 'B';
//     case 6:
//       return 'C+';
//     case 5:
//       return 'C';
//     case 4:
//       return 'D+';
//     case 3:
//       return 'D';
//     case 2:
//       return 'E+';
//     case 1:
//       return 'E';
//     case 0:
//       return 'F';
//     default:
//       return null;
//   }
// }

// console.log(`O conceito de valentina foi ${notaParaConceito(9.2)}`);
