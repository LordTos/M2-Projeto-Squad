function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



function banco_de_dados(data_hora_1, data_hora_2, nome, sobrenome, rg, email, senha, plano, cep, rua, numero, complemento, bairro, cidade, estado, referencia) {


// Make a POST request with a JSON payload.
var data = {
    'name': 'Bob Smith',
    'age': 35,
    'pets': ['fido', 'fluffy']
  };
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data)
  };
  UrlFetchApp.fetch('https://httpbin.org/post', options);

    

}