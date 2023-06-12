// Botão 1 - Alterar backgroundColor com getElementById
var botao1 = document.getElementById('button1')
botao1.addEventListener("click", function () {
    document.getElementById("titulo").style.backgroundColor = "yellow";
});

// var botao1 = document.getElementsByClassName("button1")[0];
// botao1.addEventListener("click", function () {
//     document.getElementById("items").style.backgroundColor = "yellow";
// });

// // Botão 2 - Alterar fontWeight com getElementsByClassName
// var botao2 = document.getElementsByClassName("button2")[0];
// botao2.addEventListener("click", function () {
//     var elementos = document.getElementsByClassName("musica");
//     for (var i = 0; i < elementos.length; i++) {
//         elementos[i].style.fontWeight = "bold";
//     }
// });

// // Botão 3 - Criar efeito zebrado na lista com getElementsByTagName
// var botao3 = document.getElementsByClassName("button2")[1];
// botao3.addEventListener("click", function () {
//     var itens = document.getElementsByTagName("li");
//     for (var i = 0; i < itens.length; i++) {
//         if (i % 2 === 0) {
//             itens[i].style.backgroundColor = "lightgray";
//         } else {
//             itens[i].style.backgroundColor = "white";
//         }
//     }
// });

// // Botão 4 - Incluir borderBottom com getElementsByName
// var botao4 = document.getElementsByClassName("button2")[2];
// botao4.addEventListener("click", function () {
//     var elementos = document.getElementsByName("fitem");
//     for (var i = 0; i < elementos.length; i++) {
//         elementos[i].style.borderBottom = "1px solid black";
//     }
// });

// // Botão 5 - Remover elemento da lista com remove
// var botao5 = document.getElementsByClassName("button2")[3];
// botao5.addEventListener("click", function () {
//     var lista = document.getElementById("items");
//     lista.removeChild(lista.lastElementChild);
// });

// // Botão 6 - Recuperar elemento da lista com insertBefore e alterar o conteúdo para "item recuperado" com textContent
// var botao6 = document.getElementsByClassName("button2")[4];
// botao6.addEventListener("click", function () {
//     var lista = document.getElementById("items");
//     var itemRecuperado = document.createElement("li");
//     itemRecuperado.textContent = "item recuperado";
//     lista.insertBefore(itemRecuperado, lista.firstElementChild);
// });
