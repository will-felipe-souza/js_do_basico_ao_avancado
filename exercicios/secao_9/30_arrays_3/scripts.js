let nomes = ["Josefa","Guilherme","Arthur","William","Cíntia"];

for(let i=0; i<nomes.length;i++) {
    if(nomes[i] == "William") {
        console.log("Seu nome existe!");
    }

}
//Melhor maneira abaixo:
let nomes2 = ["Josefa","Guilherme","Arthur","William","Cíntia"];

if(nomes2.includes("William"));
    console.log("Seu nome existe!");