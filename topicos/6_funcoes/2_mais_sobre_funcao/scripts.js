function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é: " + mult);

function podeDirigir(idade,cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode Dirigir!");
    } else {
        console.log("Não pode dirigir!");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0)); //0 sifnifica false
console.log(podeDirigir(19,1)); //1 significa true
console.log(podeDirigir(17,true)); 