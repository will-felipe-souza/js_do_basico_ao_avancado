function imprimirPares(num) {
    for(let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    
}

imprimirPares(10);
imprimirPares(15);
imprimirPares(143);
imprimirPares(48);