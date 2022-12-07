document.getElementById("btnAumentar").onclick = function () {
    document.querySelector("h2").classList.add("grande");

    if (document.getElementById("btnAumentar").classList.contains("mostrar")) {
        document.getElementById("btnAumentar").classList.remove("mostrar");
    }

    document.getElementById("btnAumentar").classList.add("esconder");
    document.getElementById("btnNormalizar").classList.remove("esconder");
    document.getElementById("btnNormalizar").classList.add("mostrar");
}

document.getElementById("btnNormalizar").onclick = function () {
    document.querySelector("h2").classList.remove("grande");

    if (document.getElementById("btnNormalizar").classList.contains("mostrar")) {
        document.getElementById("btnNormalizar").classList.remove("mostrar");
    }
    document.getElementById("btnNormalizar").classList.add("esconder");
    document.getElementById("btnAumentar").classList.remove("esconder");
    document.getElementById("btnAumentar").classList.add("mostrar");
}