const pontoRegex = /./; //Aceita qualquer caractere

console.log(pontoRegex.test("fewbf"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("54161"));
console.log(pontoRegex.test("fe8786"));

const dRegex = /\d/; //Aceita qualquer número

console.log(dRegex.test("fewbf"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("fe8786"));

const DRegex = /\D/; //Não aceita número

console.log(DRegex.test("fewbf"));
console.log(DRegex.test(" "));
console.log(DRegex.test("123"));
console.log(DRegex.test("fe8786"));

const sRegex = /\s/; // Verifica se tem espaços vázios, ex: espaço, quebra de linha, tab - S maiúsculo é o contrário 

console.log(sRegex.test("fewbf"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("fe8786"));

const wRegex = /\w/; //Aceita alfa-númerico

console.log(wRegex.test("fewbf"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("fe8786"));

//As letras maiusculas são uma negação (contrário das minusculas)