var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function codificar() {
    var texto = textInput.value;

    var resultCodificar = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultCodificar + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function decodificar() {
    var texto = textInput.value;

    var resultDecodificar = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDecodificar + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}
