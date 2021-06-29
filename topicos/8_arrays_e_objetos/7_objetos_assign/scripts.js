let carro = {
    portas: 2,
    portaMalas: '200L',
    motor: '2.0',
}

let adcionais = {
    tetoSolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro,adcionais);

console.log(carro);