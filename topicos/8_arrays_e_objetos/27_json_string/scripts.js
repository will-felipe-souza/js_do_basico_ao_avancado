let pessoa = {
    "nome": "William",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Dançar", "Leitura", "Esporte"] 
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
//console.log(pessoaTexto.nome); -> Não é possivél acessar o nome, pois agora é uma String

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.profissao);
console.log(pessoaJSON.hobbies[0]);