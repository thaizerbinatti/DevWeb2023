// if e else

var notaMarcos = 5
var notaMinima = 7

if (notaMarcos >= notaMinima) {
    console.log("Você está aprovado") //verdadeiro
} else {
    console.log("Você está reprovado") //falso
}

// impar ou par
// se a sobra de 10 divido por 2 for igual a um, é impar
// se a sobra 
var imparPar = 10
if (imparPar % 2 == 1) {
    console.log("é impar")
} else {
    console.log("é par")
}

//validação encadeada
//primeira validação se é par
//segunda validação numero maior que 10
//o numero é par e maior que 10
//o numero é par, porem, menor que 10
var imparPar2 = 10
if (imparPar2 % 2 == 1) {
    console.log("é impar")
} else {
    if (imparPar2 > 10){
        console.log("o número é par e maior que 10")
    }else console.log("o numero é par, porem é menor que 10")
}

//Switch-case
//se é maior que 7 apresento aprovado
//se é menor que 7 (6.5) apresenta reprovado
//se esta entre 7 e 5 aprovado por conselho

if(6 > 7){
    console.log("aprovado")
}else if(6 < 6.9 && 6 > 5){
    console.log("aprovado por conselho")
}else{
    console.log("reprovado")
}

//switch

switch(notaMarcos > 7 ){
    case true:
    console.log("aprovado")
    break;
    case false:
    console.log("reprovado")
    break;
}





