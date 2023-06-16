'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('txtEnde').value = endereco.logradouro;
    document.getElementById('txtBairro').value = endereco.bairro;
    document.getElementById('txtCidade').value = endereco.cidade;
    document.getElementById('txtEstado').value = endereco.estado_info.nome;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('txtCEP').value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;

    try {
        const response = await fetch(url);
        const endereco = await response.json();

        preencherFormulario(endereco);
    } catch (error) {
        alert("Erro ao pesquisar o CEP: ", error)
    }
}

document.getElementById('txtCEP').addEventListener('focusout', pesquisarCep);

document.getElementById('txtCEP').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        pesquisarCep();
    }
});
