const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500")); // True
console.log(cep.test("asd")); // False
console.log(cep.test("8811-50")); // False
console.log(cep.test("99999-999")); // True

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(48)9999-9999")); //True
console.log(tel.test("(48)55555-4444")); //True

