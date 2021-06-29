class Carro {
    constructor(marca,cor,gasolinaRestante,consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo
    }

    dirigir(km) {
        let gasolinaGasta = km / this.consumo;
        this.gasolinaRestante -= gasolinaGasta;
    }

    abastecer(litros) {
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro("BMW",'Branca',120, 14);

console.log(carro);

carro.dirigir(5);

console.log(carro);

carro.abastecer(30);

console.log(carro);