//1 ao 50 | While

let contador = 1;
while (contador <= 50) {
    console.log(contador);
    contador++;
}


// Contagem regressiva de 10 até 0 | Do-while

let contador2 = 10;
do {
    console.log(contador2);
    contador2--;
} while (contador2 >= 0);


//Números pares de 0 a 100 | For

for (let numPares = 0; numPares <= 100; numPares++) {
    if (numPares % 2 === 0) {
        console.log(numPares);
    }
}
