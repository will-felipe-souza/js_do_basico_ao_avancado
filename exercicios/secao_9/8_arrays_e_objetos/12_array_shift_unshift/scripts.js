let carros = ['BMW', 'Audio', 'VW','Fiat'];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');
console.log(carros);
console.log(carros[0]);