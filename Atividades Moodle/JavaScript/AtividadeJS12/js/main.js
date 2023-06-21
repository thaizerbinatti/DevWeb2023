function calTabuada() {
    // Obtém o valor digitado pelo usuário
    var valor = parseInt(document.getElementById("valor").value);

    // Obtém a referência do elemento onde a tabuada será exibida
    var resultado = document.getElementById("resultado");

    // Limpa o conteúdo anterior
    resultado.innerHTML = "";

    // Calcula e exibe a tabuada
    for (var i = 1; i <= 10; i++) {
        var linha = valor + " x " + i + " = " + (valor * i);
        resultado.innerHTML += linha + "<br>";
    }
}