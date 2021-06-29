function somaComDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b);
        }, 4000);
    })
}

async function resolveSoma(a,b,c) {
    let x = somaComDelay(a,b);
    let y = c;

    return await x + y;
}

resolveSoma(1,2,3).then(value => console.log(value));

console.log("Cheguei aqui")