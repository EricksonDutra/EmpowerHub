function mostrarPopup(input, label) {
    input.addEventListener('focus', () => {
        label.classList.add('required-popup');
    });

    input.addEventListener('blur', () => {
        label.classList.remove('required-popup');
    });
}

let nomeProprietario = document.getElementById('nome-proprietario');
let usernameLabel = document.querySelector('label[for="nome-proprietario"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
nomeProprietario.addEventListener('focus', () => {
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
nomeProprietario.addEventListener('blur', () => {
    usernameLabel.classList.remove('required-popup')
})

// Validar valor do input
nomeProprietario.addEventListener('change', (e) => {
    let valor = e.target.value
    console.log(valor);

    if (valor.length < 5) {
        nomeProprietario.classList.add('error')
        nomeProprietario.classList.remove('correct')
        usernameHelper.classList.add('visible')
        usernameHelper.innerHTML = 'Seu nome deve conter mais de 5 caracteres'
    } else {
        nomeProprietario.classList.add('correct')
        nomeProprietario.classList.remove('error')
        usernameHelper.classList.remove('visible')
    }
})


mostrarPopup(nomeProprietario, usernameLabel);


// Validar email
let emailInput = document.querySelector('#email')
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.querySelector('#email-helper')

mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener('change', (e) => {
    let valor = e.target.value

    if (valor.includes('@') && valor.includes(".com")) {
        emailInput.classList.add('correct')
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
    } else {
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailInput.classList.remove('correct')
        emailHelper.innerText = 'Digite um e-mail válido'
    }
})

// Validar telefone
let telefoneInput = document.querySelector('#telefone')
let telefoneLabel = document.querySelector('label[for="telefone"]')
let telefoneHelper = document.querySelector('#telefone-helper')

mostrarPopup(telefoneInput, telefoneLabel)

telefoneInput.addEventListener('change', (e) => {
    let valor = e.target.value

    if (valor.length > 8) {
        telefoneInput.classList.add('correct')
        telefoneInput.classList.remove('error')
        telefoneHelper.classList.remove('visible')
    } else {
        telefoneInput.classList.add('error')
        telefoneHelper.classList.add('visible')
        telefoneInput.classList.remove('correct')
        telefoneHelper.innerText = 'Digite um telefone válido'
    }
})

let nomeEmpresa = document.getElementById('nome-negocio');
let empresanameLabel = document.querySelector('label[for="nome-negocio"]');
let empresanameHelper = document.getElementById("negocio-helper");

mostrarPopup(nomeEmpresa, empresanameLabel)

// Validar valor do input
nomeEmpresa.addEventListener('change', (e) => {
    let valor = e.target.value
    console.log(valor);

    if (valor.length < 5) {
        nomeEmpresa.classList.add('error')
        nomeEmpresa.classList.remove('correct')
        empresanameHelper.classList.add('visible')
        empresanameHelper.innerHTML = 'O nome da empresa deve conter mais de 6 caracteres'
    } else {
        nomeEmpresa.classList.add('correct')
        nomeEmpresa.classList.remove('error')
        empresanameHelper.classList.remove('visible')
    }
})

// descricaoção
let descricao = document.getElementById('descricao');
let descricaoLabel = document.querySelector('label[for="descricao"]');
let descricaoHelper = document.getElementById("descricao-helper");

mostrarPopup(descricao, descricaoLabel)

// Validar valor do input descrição
descricao.addEventListener('change', (e) => {
    let valor = e.target.value
    console.log(valor);

    if (valor.length < 10) {
        descricao.classList.add('error')
        descricao.classList.remove('correct')
        descricaoHelper.classList.add('visible')
        descricaoHelper.innerHTML = 'A descrição deve conter mais de 10 caracteres'
    } else {
        descricao.classList.add('correct')
        descricao.classList.remove('error')
        descricaoHelper.classList.remove('visible')
    }
})

let senha = document.querySelector('#senha')
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.querySelector('#senha-helper')

mostrarPopup(senha, senhaLabel)

senha.addEventListener('change', (e) => {
    let valor = e.target.value
    

    if(valor.length < 5) {
        senha.classList.add('error')
        senha.classList.remove('correct')
        senhaHelper.classList.add('visible')
        senhaHelper.innerHTML = 'Senha muito curta'
    } else {
        senha.classList.add('correct')
        senha.classList.remove('error')
        senhaHelper.classList.remove('visible')
    }
})


let confirma_senha = document.querySelector('#confirma-senha')
let confirma_senhaLabel = document.querySelector('label[for="confirma-senha"]')
let confirma_senhaHelper = document.querySelector('#confirma-senha-helper')

mostrarPopup(senha, senhaLabel)

confirma_senha.addEventListener('change', (e) => {
    let valor = e.target.value


    if (valor != senha.value) {
        confirma_senha.classList.add('error')
        confirma_senha.classList.remove('correct')
        confirma_senhaHelper.classList.add('visible')
        confirma_senhaHelper.innerHTML = 'Senha não coincide'
    } else {
        confirma_senha.classList.add('correct')
        confirma_senha.classList.remove('error')
        confirma_senhaHelper.classList.remove('visible')
    }
})


let tem_empresa = document.querySelector('#tem_empresa')
let nao_empresa = document.querySelector('#nao_empresa')
let container_empresa = document.querySelector('.container_empresa')


function toggleContainer() {
    if (tem_empresa.checked) {
        container_empresa.style.display = 'block'; // Oculta o container
    } else if (nao_empresa.checked) {
        container_empresa.style.display = 'none'; // Exibe o container
    }
}

tem_empresa.addEventListener('change', toggleContainer)
nao_empresa.addEventListener('change', toggleContainer)


container_empresa.style.display = 'none'