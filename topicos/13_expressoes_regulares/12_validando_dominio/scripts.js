const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com")); // True
console.log(validaDominio.test("www.horadecodar.com.br")); // True
console.log(validaDominio.test("www.horadecodar")); // False
console.log(validaDominio.test("horadecodar.com.br")); // True