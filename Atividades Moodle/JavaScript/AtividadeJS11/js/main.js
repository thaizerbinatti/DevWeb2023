//Acessando HTML
console.log(document.title);
console.log(document.head);
console.log(document.body);

//Criando novo H1
let heading = document.createElement('H1');
heading.innerHTML = 'Cadastro de usuário';
document.body.appendChild(heading);

//Alterando title da página
document.title = 'Cadastro empresa Macron';

