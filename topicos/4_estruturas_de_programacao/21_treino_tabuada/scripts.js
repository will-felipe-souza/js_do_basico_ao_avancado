let numero = 0
let tabuada = Number(prompt("Escolha a tabuada"));
let limite = tabuada * 10;
let multiplicador = 0;


while(numero <= limite) {
    console.log(tabuada + " X " + multiplicador + " = " + numero);
    numero = numero + tabuada;
    multiplicador = multiplicador + 1;
}


