document.getElementById("loveButton").addEventListener("click", function () {
    alert("¡Te amo mucho! ❤️ Gracias por estos 3 meses inolvidables.");
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 200; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let size = Math.random() * 30 + 10;
        heart.style.fontSize = size + "px";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
    document.getElementById("buttonsad").addEventListener("click", function () {
        alert("¡Te amo mucho! ❤️ Gracias por estos 3 meses inolvidables.");
        createHeart();
    });
    
}
