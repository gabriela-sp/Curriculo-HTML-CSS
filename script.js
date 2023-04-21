const form = document.getElementById("contact-form")
const nome = document.getElementById("first-name")
const sobrenome = document.getElementById("last-name")
const telefone = document.getElementById("phone")
const email = document.getElementById("email")
const mensagem = document.getElementById("message")
const turno = document.getElementsByName("turno")
const previsao = document.getElementById("previsao")
const submitButton = document.getElementById("botao-enviar")

submitButton.addEventListener("click", function(event) {
    if (!nome.value) {
        alert('Por favor, preencha o campo "Nome"')
        event.preventDefault();
    }
    if (!sobrenome.value) {
        alert('Por favor, preencha o campo "Sobrenome"')
        event.preventDefault();
    }
    if (!telefone.value) {
        alert('Por favor, preencha o campo "Telefone"');
        event.preventDefault();
    }
    if (!email.value) {
        alert('Por favor, preencha o campo "Email"');
        event.preventDefault();
    }
    if (!mensagem.value) {
        alert('Por favor, preencha o campo "Mensagem"');
        event.preventDefault();
    }
    if (!turno[0].checked && !turno[1].checked && !turno[2].checked) {
        alert("Por favor, selecione um turno para reuniões");
        event.preventDefault();
    }
    if (!previsao.value) {
        alert("Por favor, selecione uma previsão de entrega desejada");
        event.preventDefault();
    }
}); 