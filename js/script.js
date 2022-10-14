var mensagem = document.getElementById("mensagem");
var shiftId = document.getElementById("shiftId");
var check = document.getElementById("check");
var tipo = document.getElementById("tipo");
var outInput = document.getElementById("outInput");
let inputs = [outInput,mensagem];
var code = document.getElementById("codificar");
var decode = document.getElementById("decodificar");
var codeBtn = document.getElementById("codeBtn");
var decodeBtn = document.getElementById("decodeBtn");

inputs.forEach ( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase();
    }
})

var select = addEventListener('click', function(){
    var codigo = document.getElementById("codigo").value
    if (codigo == "cesar"){
        shiftId.style.display = 'flex';
        check.style.display = 'flex';
    } else if (codigo == "base64"){
        check.style.display = 'flex';
        shiftId.style.display = 'none';
    }
})

code.addEventListener('click', function(){
    outInput.style.display = 'flex';
    codeBtn.style.display = 'block';
    decodeBtn.style.display = 'none'
})

decode.addEventListener('click', function(){
    outInput.style.display = 'flex';
    codeBtn.style.display = 'none';
    decodeBtn.style.display = 'block'
})



function codificar(){
   
    var mensagem = document.getElementById('mensagem').value;
    var solved = ''
    var shift = parseInt(document.getElementById('shift').value)

    for (var i = 0; i < mensagem.length; i++){
        var ascii_num = mensagem[i].charCodeAt()
        var soma = ascii_num + shift
        soma >= 65 && soma <= 90 ? solved += String.fromCharCode(soma) : soma > 90 ? solved += String.fromCharCode(65 + (soma & 91)) : solved += mensagem[i];       
    }
    outInput.value = solved
}
    


function decodificar(){
    
    var mensagem = document.getElementById('mensagem').value;
    var solved = ''
    var shift = parseInt(document.getElementById('shift').value)

    for (var i = 0; i < mensagem.length; i++){
        var ascii_num = mensagem[i].charCodeAt()
        var soma = ascii_num + (shift*-1)
        soma >= 65 && soma <= 90 ? solved += String.fromCharCode(soma) : soma > 90 ? solved += String.fromCharCode(65 + (soma & 91)) : solved += mensagem[i];       
    }
    outInput.value = solved

}


codeBtn.addEventListener('click', codificar);
decodeBtn.addEventListener('click', decodificar);  
