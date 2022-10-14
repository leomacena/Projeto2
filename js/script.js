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
        var sum = ascii_num + shift
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += txtInput[i]       
    }
    outInput.value = solved
}
    


/*
function decode(){
    let txtInput = document.getElementById('txtInput').value;
    let solved = ''
    let shift = parseInt(document.getElementById('shift').value)

    for (var i = 0; i < txtInput.length; i++){
        let ascii_num = txtInput[i].charCodeAt()
        let sum = ascii_num + (shift *-1)
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += txtInput[i]       
    }
    outInput.value = solved
*/


codeBtn.addEventListener('click', codificar); 
