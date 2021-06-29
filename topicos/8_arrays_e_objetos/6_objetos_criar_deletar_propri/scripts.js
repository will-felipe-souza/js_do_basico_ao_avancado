let pessoa = {
    nome: 'William',
    idade: 28,
    profissao: 'Programador',
}

console.log(pessoa.nome);

delete pessoa.nome //Deletando propriedade do objeto

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false

console.log(pessoa.casado); //Adicionando uma nova propriedade no objeto