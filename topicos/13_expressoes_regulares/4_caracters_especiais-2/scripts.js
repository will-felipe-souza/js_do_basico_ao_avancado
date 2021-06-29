const dia = /\d\d/; //Verifica se tem dois (ou mais) números

console.log(dia.test("2019") && "2019".length == 2); //Verifica se tem dois números
console.log(dia.test("string"));
console.log(dia.test("05") && "05".length == 2);

const palavraPeloMenosTresLetras = /\w\w\w/; //Verifica se tem três (ou mais) letras

console.log(palavraPeloMenosTresLetras.test("asd"));
console.log(palavraPeloMenosTresLetras.test("asdd"));
console.log(palavraPeloMenosTresLetras.test("as"));