//Objetos

let aluno = {
    primeiroNome: "Abraao",
    nota: 8,
    idade: 102,
    altura: 3.15,
    //podemos adicionar arrays dentro do objeto:
    hobbies: ["ping pong","castor de andrade", "futebol"],
    personalidade: "jogador caro",
    //segundo objeto:
    endereco: {
        numero: 34,
        nomeRua: "x",
        estado: "SP"
    }
}

console.log(aluno) //as propriedades aparecem em ordem alfabetica
console.log(aluno.nota)
console.log(aluno.hobbies[1])

//acessando o valor de um objeto dentro do objeto
console.log(aluno.endereco.numero)

//atribuição via desestruturação
//dessa forma podemos chamar no console o atributo direto
const {
    primeiroNome,
    idade,
    nota
} =aluno
console.log(nota)

//array de objetos
const alunosIOS = [
    {
        nomeAluno: "Higor Fequer",
        idade: 54,
        nota: 9
    },
    {        
        nomeAluno: "Marcos",
        idade: 12,
        nota: 8
    },
    {        
        nomeAluno: "Thainá Zerbinatti",
        idade: 35,
        nota: 10
    }    
]
console.log(alunosIOS)

//retornando info especifica
console.log(alunosIOS[0])
console.log(alunosIOS[0].nota)

//metodo json
console.log(JSON.stringify(alunosIOS))
let jsonzinho = '[{"nomeAluno":"Higor Fequer","idade":54,"nota":9},{"nomeAluno":"Marcos","idade":12,"nota":8},{"nomeAluno":"Thainá Zerbinatti","idade":35,"nota":10}]'

console.log(JSON.parse(jsonzinho))