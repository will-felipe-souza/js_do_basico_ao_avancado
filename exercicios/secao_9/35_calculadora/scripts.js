const calculadora = {
    soma: function(a,b) {
        return a+b;
    },
    subtrair: function(a,b) {
        return a-b;
    },
    divir: function(a,b) {
        return a/b;
    },
    multiplicar: function(a,b) {
        return a*b;
    }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(5,5));
console.log(calculadora.multiplicar(8,2));
console.log(calculadora.divir(5,2));