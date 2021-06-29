// Quando aperta a tecla
window.addEventListener("keydown", (event) => {

    if(event.key == 'q') {
        console.log("Apertou a letra q");
    };
});

// Quando solta a tecla
window.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        console.log("Soltou o enter")
    }
})