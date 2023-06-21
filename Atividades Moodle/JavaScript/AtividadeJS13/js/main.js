// Alterando cor de fundo
let button1 = document.querySelector(".button1");
button1.addEventListener("click", function () {
    let titulo = document.getElementById("titulo");
    titulo.style.backgroundColor = "green";
});

// Fonte em negrito
let button2 = document.querySelectorAll(".button2")[0];
button2.addEventListener("click", function () {
    let musicas = document.getElementsByClassName("musica");
    for (let i = 0; i < musicas.length; i++) {
        musicas[i].style.fontWeight = "bold";
    }
});

// Efeito zebrado
let button3 = document.querySelectorAll(".button2")[1];
button3.addEventListener("click", function () {
    let zebra = document.getElementsByTagName("li");
    for (let i = 0; i < zebra.length; i++) {
        if (i % 2 === 0) {
            zebra[i].style.backgroundColor = "lightgray";
        } else {
            zebra[i].style.backgroundColor = "white";
        }
    }
});

// Incluindo borda
let button4 = document.querySelectorAll(".button2")[2];
button4.addEventListener("click", function () {
    let borda = document.getElementsByName("fitem");
    for (let i = 0; i < borda.length; i++) {
        borda[i].style.borderBottom = "1px solid black";
    }
});

// Removendo elemento
let button5 = document.querySelectorAll(".button2")[3];
button5.addEventListener("click", function () {
    let musica3 = document.getElementById("musica3");
    musica3.remove();
});

// Recuperando elemento
let button6 = document.querySelectorAll(".button2")[4];
button6.addEventListener("click", function () {
    let itemRecuperado = document.createElement("li");
    itemRecuperado.textContent = "Item recuperado";
    let musica4 = document.getElementById("musica4");
    musica4.parentNode.insertBefore(itemRecuperado, musica4.nextSibling);
});
