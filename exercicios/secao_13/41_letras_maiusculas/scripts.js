const validarMaiusculas = /[A-Z]/;

console.log(validarMaiusculas.test("A")); // True
console.log(validarMaiusculas.test("ABFH")); // True
console.log(validarMaiusculas.test("ABFHdwd")); // True
console.log(validarMaiusculas.test("adsfd")); // False