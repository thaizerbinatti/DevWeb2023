document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var usuario = document.getElementById('user').value;
        var senha = document.getElementById('senha').value;
        var cargo = document.getElementById('cargo-itens').value;

        var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        var senhaValida = senhaRegex.test(senha);

        var usuarioValido = usuario === usuario.toUpperCase();

        if (senhaValida && usuarioValido) {
            var cargoTexto;
            switch (cargo) {
                case '1':
                    cargoTexto = 'Estagiário';
                    break;
                case '2':
                    cargoTexto = 'Trainee';
                    break;
                case '3':
                    cargoTexto = 'Analista';
                    break;
                case '4':
                    cargoTexto = 'Júnior';
                    break;
                case '5':
                    cargoTexto = 'Sênior';
                    break;
                case '6':
                    cargoTexto = 'Líder Técnico';
                    break;
                case '7':
                    cargoTexto = 'CEO';
                    break;
                default:
                    cargoTexto = 'Desconhecido';
                    break;
            }

            alert("Olá, " + usuario + ", seu cargo é " + cargoTexto + ", vamos te redirecionar para a página desejada.");
        } else {
            if (!usuarioValido) {
                alert("O usuário deve conter apenas letras maiúsculas.");
            } else {
                alert("A senha deve ter no mínimo 8 caracteres e conter pelo menos um caractere especial, um número e uma letra maiúscula.");
            }
        }
    });
});