// Identificar elementos do HTML //
const ele_nome = document.getElementById("nome");
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

const solicitar = require("./views_formulario")

import {teste} from './views_formulario';

// Monitor de eventos: acionar quando qualquer edição for feita no CEP (apagando ou escrevendo) //
ele_cep.addEventListener('input', teste);
ele_cep.addEventListener('propertychange', teste);

