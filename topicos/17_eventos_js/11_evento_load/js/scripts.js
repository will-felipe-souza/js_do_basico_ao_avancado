// window.addEventListener("load", () => {
//     alert("Assine os nossos termos de uso");
// });

window.addEventListener("beforeunload", (e) => {
    event.returnValue = null;
});