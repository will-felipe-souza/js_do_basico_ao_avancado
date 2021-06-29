let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let a = document.querySelector("a");

function msg(e) {
    console.log("Clicou no button");
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", (event) => {
    console.log(event);
});

a.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("Não vai mudar de link");
})