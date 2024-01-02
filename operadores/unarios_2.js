let a = 1;
let b = 2;

// console.log(++a === b++);
// Da true pois o prefix "operador antes da variavel (++a)" tem mais ordem de precedencia, dps o "===" vai ter mais precedencia doq o b++

a++;
console.log(a === b);
b++;
