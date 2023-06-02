// Elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const dataNasc = document.querySelector('dataNasc');
const email = document.querySelector('#email');
const curso = document.querySelector('#curso');
const msg = document.querySelector('.msg');
const msg_data = document.querySelector('.msg_data');

// Validando data
data.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        // alert('Por favor, insira um e-mail válido.');
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg_email.remove(), 3000);
    }
});