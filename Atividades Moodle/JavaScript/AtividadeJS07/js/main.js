//Array de objetos
const aluno = [
    {
        nomeAluno: "Ana",
        idade: 17,
        nota: 8,
        ano: '2°B'
    },
    {
        nomeAluno: "Bruno",
        idade: 16,
        nota: 6,
        ano: '2°C'
    },
    {
        nomeAluno: "Veronica",
        idade: 17,
        nota: 9,
        ano: '2°C'
    },
    {
        nomeAluno: "Marta",
        idade: 15,
        nota: 8,
        ano: '3°C'
    },    {
        nomeAluno: "Brenno",
        idade: 19,
        nota: 8,
        ano: '3°C'
    },    {
        nomeAluno: "Maria",
        idade: 14,
        nota: 8,
        ano: '1°F'
    }
]

//Todo o array
console.log(aluno)

//Informações do aluno Bruno
console.log(aluno[1])

//Nota Maria
console.log(aluno[5].nota)

//Retorno em formato JSON
console.log(JSON.stringify(aluno))
let json2 = '[{"nomeAluno":"Ana","idade":17,"nota":8,"ano":"2°B"},{"nomeAluno":"Bruno","idade":16,"nota":6,"ano":"2°C"},{"nomeAluno":"Veronica","idade":17,"nota":9,"ano":"2°C"},{"nomeAluno":"Marta","idade":15,"nota":8,"ano":"3°C"},{"nomeAluno":"Brenno","idade":19,"nota":8,"ano":"3°C"},{"nomeAluno":"Maria","idade":14,"nota":8,"ano":"1°F"}]'
console.log(JSON.parse(json2))