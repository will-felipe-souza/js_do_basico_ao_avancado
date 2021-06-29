let arry1 = [1,2,3,4,5,6,7,8,9,0];
let arry2 = [1,2,3,4];

function verificaTamanhoArray(x) {
    if(x.length>5) {
        console.log("Array longa");
    } else {
        console.log("Arrey Curta");
    }
}

verificaTamanhoArray(arry1); 
verificaTamanhoArray(arry2);
