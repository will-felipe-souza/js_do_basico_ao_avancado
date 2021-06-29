class Conta {
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(value) {
        this.saldo += value;
    }

    saque(value) {
        this.saldo -= value;
    }
}

let contaWill = new Conta(500);

console.log(contaWill);

contaWill.saque(100);

console.log(contaWill)

contaWill.deposito(600);
contaWill.saque(500);

console.log(contaWill);