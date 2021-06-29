let nomes = ['William', 'Maria', 'José'];

for(let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i])
}

let times = ['Palmeiras', 'São Paulo', 'Corinthias', 'Santos'];

for(let i = 0; i < times.length; i++) {
    console.log(times[i]);
    if(times[i] == `Palmeiras`) {
        console.log(`${times[i]} é o melhor do Mundo!`);
    }
}