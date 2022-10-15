let mensagem = document.getElementById("mensagem");
let shiftId = document.getElementById("shiftId");
let check = document.getElementById("check");
let tipo = document.getElementById("tipo");
let outInput = document.getElementById("outInput");
let inputs = [outInput,mensagem];
let code = document.getElementById("codificar");
let decode = document.getElementById("decodificar");
let codeBtn = document.getElementById("codeBtn");
let decodeBtn = document.getElementById("decodeBtn");

inputs.forEach ( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase();
    }
})

let select = addEventListener('click', function(){
    let codigo = document.getElementById("codigo").value
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
   
    if (document.getElementById("codigo").value == "cesar") {
        
        let mensagem = document.getElementById('mensagem').value;
        let solved = ''
        let shift = parseInt(document.getElementById('shift').value)
    
        for (let i = 0; i < mensagem.length; i++){
            let ascii_num = mensagem[i].charCodeAt()
            let soma = ascii_num + shift
            soma >= 65 && soma <= 90 ? solved += String.fromCharCode(soma) : soma > 90 ? solved += String.fromCharCode(65 + (soma % 91)) : solved += mensagem[i];       
        }
        outInput.value = solved

    } else if (document.getElementById("codigo").value == "base64"){
        let mensagem = document.getElementById('mensagem').value;
        let encoded = window.btoa(mensagem);
        outInput.value = encoded;    
    }
}
 

//CORRIGIR
function decodificar(){
   
    if (document.getElementById("codigo").value == "cesar") {
        
        let mensagem = document.getElementById('mensagem').value;
        let solved = ''
        let shift = parseInt(document.getElementById('shift').value)
    
        for (let i = 0; i < mensagem.length; i++){
            let ascii_num = mensagem[i].charCodeAt()
            let soma = ascii_num - shift
            soma >= 65 && soma <= 90 ? solved += String.fromCharCode(soma) : soma < 65 ? solved += String.fromCharCode(65 - (soma % 64)) : solved += mensagem[i];       
        }
        outInput.value = solved

    } else if (document.getElementById("codigo").value == "base64"){
        
        let mensagem = document.getElementById('mensagem').value;
        let encoded = window.atob(mensagem);
        outInput.value = encoded;
    }
}

codeBtn.addEventListener('click', codificar);
decodeBtn.addEventListener('click', decodificar);  
