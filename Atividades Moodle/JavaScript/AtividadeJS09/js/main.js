// Atividade 1

console.log("Atividade 1")
const valores = [17, 43, 8, 4, 97, 56, 29]
valores.forEach(valor => {
    if (valor % 2 === 0) {
        console.log(valor + ' é par');
    } else {
        console.log(valor + ' é ímpar');
    }
});

// Atividade 2

console.log("Atividade 2")
const numbers = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61]
let filtroNumbers = numbers.filter((numbers) => {
    return numbers >= 20 && numbers <= 80
})
console.log(filtroNumbers)