const reg = /\w+: (Matheus|João|Maria)/; // Nome: "Algum nome"

console.log(reg.test("Nome: Matheus")); // True
console.log(reg.test("Nome: José")); // False
console.log(reg.test("Nome: Maria")); // True