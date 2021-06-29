let timeout;

window.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);
    
    timeout = setTimeout(function() {
        console.log(e.x);
    }, 500);
});