let p = Promise.resolve(new Error("Não deu certo"));

console.log("Outro código");

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));