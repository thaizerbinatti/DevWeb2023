window.addEventListener('load', function () {
    const a = 1;
    const b = 6;
    const c = 5;

    // Método tradicional
    function calcularEquacao() {
        const delta = b * b - 4 * a * c;
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        exibirResultado(x1, x2);
    }

    // Arrow Function
    const calcularEquacaoArrow = () => {
        const delta = b * b - 4 * a * c;
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        exibirResultado(x1, x2);
    };

    function exibirResultado(x1, x2) {
        const resultado = document.getElementById('resultado');
        resultado.textContent = `x1 = ${x1} | x2 = ${x2}`;
    }

    const calcularButton = document.getElementById('calcular');
    calcularButton.addEventListener('click', calcularEquacao);

    const calcularButtonArrow = document.getElementById('calcularArrow');
    calcularButtonArrow.addEventListener('click', calcularEquacaoArrow);
});