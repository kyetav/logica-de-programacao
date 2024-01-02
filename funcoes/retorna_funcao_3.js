function somar(a, b) {
  return a + b;
}

console.log(somar(5, 4));

function somar2(a) {
  return function (b) {
    return a + b;
  };
}

console.log(somar2(5)(9));

const somarMais10 = somar2(10);
console.log(somarMais10(15));
