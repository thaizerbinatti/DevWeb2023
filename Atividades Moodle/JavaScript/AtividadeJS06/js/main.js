//Array Unidimensional
var informacoes = ["HTML", "1993", "CSS", "1996", "Bootstrap", "2011", "JS", "1995", "React", "2013",
    "Java", "1995"]

     //Retorno do array
    console.log(informacoes)

    //Tamanho do array
    console.log(informacoes.length)

     //Retorno da informação JS
    console.log(informacoes[6])

     //Transformando array em string
    console.log(informacoes.toString())

    //Trocando o separador
    console.log(informacoes.join("/"))

    //Adicionar informação IOS no inicio do array
    let outraInformacao = informacoes.unshift("IOS")
    console.log(outraInformacao)
    console.log(informacoes)



//Array Bidimensional
var informacoes2 = [
    ["HTML", "1993", "CSS", "1996"],
    ["Bootstrap", "2011", "JS", "1995"],
    ["React", "2013", "Java", "1995"]
]

//Retornando todo o array
console.log(informacoes2)

//Tamanho do array
console.log(informacoes2.length)

//Retornando o ano 2013
console.log(informacoes2[2][1])

//Trocando JS por JavaScript
console.log(informacoes2)
informacoes2[1][2] = "JavaScript";
console.log(informacoes2)

//Removendo a informação Java
delete informacoes2 [2][2]
console.log(informacoes2)

//Inserindo informação pipoca
let outraInformacao2 = informacoes2[2].push("Pipoca")
console.log(outraInformacao2)
console.log(informacoes2)

