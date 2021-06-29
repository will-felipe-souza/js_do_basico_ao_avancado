function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert("Por favor, passe só número para o programa");
    } else {
        return number
    }
}

console.log(checarNumero(5));
checarNumero('teste');

let number = prompt('Digite um número');

checarNumero(number);