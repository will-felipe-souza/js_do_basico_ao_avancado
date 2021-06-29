const validarID = /\d+\ID\b/;

console.log(validarID.test("56484ID")); // True
console.log(validarID.test("56484")); // False
console.log(validarID.test("dohuegID")); // False
console.log(validarID.test("124897ID")); // True
console.log(validarID.test("124897ID6785")); // False