let nome = "William";
let idade = 28

if(nome != undefined && nome == "Joaquim"){
    console.log("Nome está definido");
} else if(nome == "William" && nome.length > 5 && idade == 50) {
    console.log("O nome é William!");
 } else {
      console.log("Não é William");
  }  

  if(1 > 2){
    console.log("Teste");
} else if(1 == 1) { //Else If sem o Else, todas as sentenças tem que ser verdadeira
    console.log("Testando");
} 