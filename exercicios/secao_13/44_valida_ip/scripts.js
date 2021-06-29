const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIP.test("127.0.0.1")); //True
console.log(validaIP.test("127.3.4.")); // False
console.log(validaIP.test("127.3.4.80")); // True
console.log(validaIP.test("12.3.4.8")); // True
console.log(validaIP.test("127.3.8")); // False
console.log(validaIP.test("12732.87483.8.9878")); // False