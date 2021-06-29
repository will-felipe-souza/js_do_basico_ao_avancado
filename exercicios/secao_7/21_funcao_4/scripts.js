function tipoDeDado(dado) {
    console.log(typeof(dado));
}

tipoDeDado(5);
tipoDeDado("William");
tipoDeDado(5>0);

function tipoDeDado2(dado2) {

    if(typeof dado2 === 'string') {
        console.log("Esse dado é uma String");
    } else if(typeof dado2 === 'number') {
        console.log("Esse dado é um Number");
    } else if (typeof dado2 === 'boolean') {
        console.log("Esse dado é um Boolean");
    }
}

    tipoDeDado2(true);
    tipoDeDado2(10);
    tipoDeDado2("William")