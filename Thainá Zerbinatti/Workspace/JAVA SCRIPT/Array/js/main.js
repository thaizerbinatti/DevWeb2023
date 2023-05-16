//variável comum
var test = true //apenas um valor

//variavel array /unidimensional
var test2 = [true, 171, "Gabriel", 3.14] //varios valores
console.log(test)
console.log(test2)

//p chamar um conteúdo do array, usamos a posição:
console.log(test2[2])
console.log(test2[3])

//array unidimensinal
console.log(test2[2])
console.log(test2[3]) //apenas um valor da posição

//array bidimensional
const turma = [
    ["turma 1", "gabriel", 7],
    ["turma 1", "carina", 10],
    ["turma 1", "felipe", 9]
]
console.log(turma) //length conta as linhas

//p retornar apenas um valor no bidimensional
console.log(turma[1][1])

console.table(turma) //aparece em forma de tabela


//como alterar informações do array

const array1 = ["maça", "kiwi", "pera", "tomate"]
console.log(array1)
array1[2] = "melao";
console.log(array1)

//converter array em string
const array2 = ["maça", "kiwi", "pera", "tomate"]
console.log(array2.toString())

//metodo join - converte
var atrasado = ["matheus", "abraao", "erick", "jonathan"]
console.log(atrasado.join("*"))

//propriedade length - converte o array em string, mas pode por qql caractere p/ separar
var atrasado = ["matheus", "abraao", "erick", "jonathan"]
console.log(atrasado.length)

//metodo pop - remove o ultimo elemento do array
var atrasado = ["matheus", "abraao", "erick", "jonathan"]
console.log(atrasado.join("*"))
console.log(atrasado.length)
let atrasado2 = atrasado.pop();
console.log(atrasado2)
console.log(atrasado)

// metodo push - adiciona um elemento novo no final do array
let atrasado2min = atrasado.push('fequer')
console.log(atrasado2)
console.log(atrasado)

//metodo shift - remove um elemento do inicio do array
let atrasada3min = atrasado.shift();
console.log(atrasado3min)
console.log(atrasado)

//metodo unshift - insere um elemento no inicio do array
let outroAtrasado = atrasado.unshift("adrielly")
console.log(outroAtrasado);
console.log(atrasado)

//comando delete
delete atrasado [2]
console.log(atrasado)



