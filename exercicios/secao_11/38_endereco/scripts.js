class Endereco {
    constructor(rua,bairro,cidade,estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let enderecoWill = new Endereco("Rua Jane Marroni Barroso", "Cidade Nova América", "São Paulo", "SP");

console.log(enderecoWill);

enderecoWill.novaRua = "Rua Hilário Ascabusi";

console.log(enderecoWill);

enderecoWill.novoBairro = "Jardim Alpino";

console.log(enderecoWill);
