// Identificar elementos do HTML //
const ele_nome = document.getElementById("nome");
const ele_sobrenome = document.getElementById("sobrenome");
const ele_rg = document.getElementById("rg");
const ele_email = document.getElementById("email");
const ele_senha = document.getElementById("senha");
const ele_repetir_senha = document.getElementById("repetir_senha");
const ele_cep = document.getElementById("cep");
const ele_rua = document.getElementById("rua");
const ele_numero = document.getElementById("numero");
const ele_complemento = document.getElementById("complemento");
const ele_bairro = document.getElementById("bairro");
const ele_cidade = document.getElementById("cidade");
const ele_estado = document.getElementById("estado");
const ele_referencia = document.getElementById("referencia");

// Impedir refresh da página ao clicar no botão submit //
var form = document.getElementById("form_id");
function handleForm(event) { event.preventDefault(); button() }
form.addEventListener('submit', handleForm);

// Pegar valor do elemento //
function pegar_valor(ele) {
    return views_pegar_valor(ele)
}

// Imputar valor no elemento //
function imputar_valor(ele, valor) {
    views_imputar_valor(ele, valor)
}

// ########################################################################### // 

// Monitor de eventos: acionar quando qualquer edição for feita no CEP (apagando ou escrevendo) //
ele_cep.addEventListener('input', cep_alterado);
ele_cep.addEventListener('propertychange', cep_alterado);

// Pegar valor inserido no campo "CEP", manter SOMENTE números e imputar novamente //
function cep_alterado() {

    let cep = pegar_valor(ele_cep).replace(/\D/g, '');
    imputar_valor(ele_cep, cep);

    // Executar somente se o CEP tiver mais de 7 dígitos //
    if (pegar_valor(ele_cep).length > 7) {
        let cep_ok = cep[0] + cep[1] + cep[2] + cep[3] + cep[4] + "-" + cep[5] + cep[6] + cep[7];
        consultar_cep(pegar_valor(ele_cep))
        imputar_valor(ele_cep, cep_ok)
    }
}

// ########################################################################### // 

// Butão "Ser egistrar" presionado //
function button() {

    // Checar se todos os campos foram preenchidos //
    if (pegar_valor(ele_nome) == "" || pegar_valor(ele_sobrenome) == "" || pegar_valor(ele_rg) == "" || pegar_valor(ele_email) == "" || pegar_valor(ele_senha) == ""
        || pegar_valor(cep) == "" || pegar_valor(numero) == "") {
        alert("Confira os seus dados");
        return
    }
    // Checar se o email tem o "@" e ".com" //
    if (!pegar_valor(ele_email).match(/@/) || !pegar_valor(ele_email).match(/.com/)) {
        alert("Email incorreto! Favor verificar.")
        return
    }
    // Checar se a "senha" é igual ao "repetir senha" //
    if (pegar_valor(ele_senha) != pegar_valor(ele_repetir_senha)) {
        alert("Senhas não conferem")
        return
    }
    // Checar se o plano foi selecionado //
    if (!document.getElementById('dot-1').checked && !document.getElementById('dot-2').checked) {
        alert("Favor selecionar o plano");
        return
    } else {
        // Caputurar os dados do formulário e mandar para o banco de dados //
        const ele_plano = document.querySelector('input[name="plano"]:checked').value;
        alert(`
        NOME: ${pegar_valor(ele_nome)}
        SOBRENOME: ${pegar_valor(ele_sobrenome)}
        RG: ${pegar_valor(ele_rg)}
        EMAIL: ${pegar_valor(ele_email)}
        SENHA: ${pegar_valor(ele_senha)}
        PLANO: ${ele_plano}

        CEP: ${pegar_valor(ele_cep)}
        RUA: ${pegar_valor(ele_rua)}
        Nº: ${pegar_valor(ele_numero)}
        COMP.: ${pegar_valor(ele_complemento)}
        BAIRRO: ${pegar_valor(ele_bairro)}
        CIDADE: ${pegar_valor(ele_cidade)}
        ESTADO: ${pegar_valor(ele_estado)}
        REF.: ${pegar_valor(ele_referencia)}
        `)
        window.location.reload()
        return
    }

}

// ########################################################################### // 

// API busca CEP //

function consultar_cep(api_cep) {
    let url = 'https://viacep.com.br/ws/' + api_cep + '/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onerror = function (e) {
        alert("API OFFLINE ou CEP INVÁLIDO")
    }
    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if (response.erro === true) {
            alert("CEP NÃO ENCONTRADO");
        } else {
            imputar_valor(ele_rua, response.logradouro)
            imputar_valor(ele_bairro, response.bairro)
            imputar_valor(ele_cidade, response.localidade)
            imputar_valor(ele_estado, response.uf)
        }
    }
    request.send();
}

