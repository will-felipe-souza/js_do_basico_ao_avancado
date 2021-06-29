const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Nome: Nike")); // False
console.log(validaMarca.test("Marca: Puma")); // True
console.log(validaMarca.test("Marca: Adidas")); // True
console.log(validaMarca.test("MArca: Asics")); // False
console.log(validaMarca.test("Marca: Lenovo")); // False