const umOuMaisNumeros = /\d+/; // aceita um número indeterminado de digitos

console.log(umOuMaisNumeros.test("1518")); // True
console.log(umOuMaisNumeros.test("")); // False
console.log(umOuMaisNumeros.test("teste")); // False
console.log(umOuMaisNumeros.test("65498465123065")); // True
console.log(umOuMaisNumeros.test("1518d")); // True