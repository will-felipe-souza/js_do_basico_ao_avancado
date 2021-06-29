const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("will.felipe.souza@gmail.com")); // True
console.log(validarEmail.test("will.felipe.souza@gmail")); // False
console.log(validarEmail.test("gmail.com")); // False
console.log(validarEmail.test("email@provedor.com.br")); // True