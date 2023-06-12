class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    getIdade() {
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();
        const anoNascimento = this.dataNascimento.getFullYear();

        let idade = anoAtual - anoNascimento;

        return idade;
    }
}

Pessoa.prototype.getNiver = function () {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    const mesNascimento = this.dataNascimento.getMonth() + 1;
    const diaNascimento = this.dataNascimento.getDate();

    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
        return true;
    }

    return false;
};

let pessoas = new Array(10);
pessoas[0] = new Pessoa('Patricia', '1990-05-05');
pessoas[1] = new Pessoa('Leticia', '1998-08-11');
pessoas[2] = new Pessoa('Julia', '1998-09-23');
pessoas[3] = new Pessoa('Tiago', '2000-03-15');
pessoas[4] = new Pessoa('Gustavo', '1980-04-08');
pessoas[5] = new Pessoa('Miguel', '1995-07-13');
pessoas[6] = new Pessoa('Livia', '2005-05-10');
pessoas[7] = new Pessoa('Camila', '1996-06-06');
pessoas[8] = new Pessoa('Emanoel', '2001-01-05');
pessoas[9] = new Pessoa('Erica', '2002-02-03');

pessoas.forEach(pessoa => {
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.getNiver();

    if (fezAniversario) {
        console.log(pessoa.nome + " tem " + idade + " anos e já fez aniversário esse ano.");
    } else {
        console.log(pessoa.nome + " tem " + idade + " anos e ainda não fez aniversário esse ano.");
    }
});

