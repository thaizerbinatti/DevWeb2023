class pessoa {
    constructor(nome, dataNascimento, getIdade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento; 
    }
    getIdade(idade) {
        idade = this.dataNascimento
        return idade - getFullYear();
    }
}

let pessoas = new Array(10);
pessoas[0] = new pessoa('Patricia', '05-05-1990')
pessoas[1] = new pessoa('Leticia', '08-11-1998')
pessoas[2] = new pessoa('Julia', '23-09-1998')
pessoas[3] = new pessoa('Tiago', '15-03-2000')
pessoas[4] = new pessoa('Gustavo', '08-04-1980')
pessoas[5] = new pessoa('Miguel', '13-07-1995')
pessoas[6] = new pessoa('Livia', '10-05-2005')
pessoas[7] = new pessoa('Camila', '06-06-1996')
pessoas[8] = new pessoa('Emanoel', '05-01-2001')
pessoas[9] = new pessoa('Erica', '03-02-2002')
console.log(pessoas)


pessoa.prototype.getNiver = function () {
    let dados = [this.dataNascimento(), this.dob.getMonth() + 1]
}

