//Quantidade de letras
let text = ' Morango Pêssego Uva Abacaxi Laranja ';
console.log(text.length);

//3 primeiros caracteres
const str = ' Abacaxi ';
console.log(str.substring(0,2));

//Limpar caracter em branco
let text2 = '        Uva';
console.log(text2.trim());

//Texto em caixa baixa
const frutas = 'Morango Pêssego Uva';
console.log(frutas.toLowerCase());

//Exibir listagem de frutas
const listafrutas = "Morango, Pessego, Uva, Abacaxi, Laranja"
const strCopy = listafrutas.split();
console.log(strCopy);
