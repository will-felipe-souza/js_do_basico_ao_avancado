class Carrinho {
    constructor(itens,totalItens,valorTotal) {
        this.itens = itens;
        this.totalItens = totalItens;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.totalItens += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removerItem(item) {


        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                
                let obj = this.itens[itemCarrinho].id;
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id});

                this.totalItens -= this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);

            }
        }
    }
}

let compra = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(compra);

compra.addItem({id:01, nome:"Camisa", qtd:2, preco:20});

console.log(compra);

compra.addItem({id:03, nome:"Boné", qtd:1, preco:15});

console.log(compra);

compra.removerItem({id: 01, nome:"Camisa", qtd: 1, preco: 20})

console.log(compra)