const futuro = Date.now() + 1000;
let quantidade = 0;

while (Date.now() < futuro) {
  quantidade++;
}

// Quantidade: 6190470
// Quantidade: 7570237
// Quantidade: 7267266

console.log('Quantidade: ' + quantidade);
