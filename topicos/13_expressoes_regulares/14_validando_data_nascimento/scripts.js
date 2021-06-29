const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNasc.test("05/02/2000")); // True
console.log(validarDataNasc.test("5/2/2000")); // False
console.log(validarDataNasc.test("05-02-2000")); // False
console.log(validarDataNasc.test("05/02/00")); // False
console.log(validarDataNasc.test("10/02/1992")); // True