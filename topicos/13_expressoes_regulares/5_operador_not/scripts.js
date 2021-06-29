const notAeB = /[^ab]/;

console.log(notAeB.test('a')); // Não Aceita
console.log(notAeB.test('Aqui tem a')); //Aceita

const notAaZ = /[^a-z]/; // Tem que combinar exatamente

console.log(notAaZ.test('asd'));
console.log(notAaZ.test('123 asd'));



