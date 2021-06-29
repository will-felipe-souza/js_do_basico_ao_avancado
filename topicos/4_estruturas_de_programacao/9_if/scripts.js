let idade = 19;

if(idade == 19){
    console.log("A idade é = 19");
}

if(idade > 25){ //Valor falso não imprime nada, sistema segue apenas se for verdadeiro
    console.log("A idade é maior que 25");
}

let nome = "William"

if(nome == "William" && idade > 10){
    console.log("Liberado");
}

let passaport = true;

if((nome == "William" && idade > 30) || passaport == true){
    console.log("Liberado2");
}