const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// #####################MEU CODIGO ##########################
// for (let i = 0; i < 8; i--) {
//   console.log(i, numeros[i]);
// }

// ############### CODIGO DO PROFESSOR #############################

for (let i = numeros.length - 2; i >= 0; i -= 2) {
  console.log(numeros[i]);
}
