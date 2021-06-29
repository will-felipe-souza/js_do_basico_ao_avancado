const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("william_123")); // true
console.log(validarNomeUsuario.test("as")); // false
console.log(validarNomeUsuario.test("11111111111111111")); // false
console.log(validarNomeUsuario.test("william-12345")); // true