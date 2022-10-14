let codeBtn = document.getElementById("codificar");
let outInput = document.getElementById("outInput");
let txtInput = document.getElementById("txtInput");
let inputs = [outInput,txtInput];
let decodeBtn = document.getElementById("Decodificar");

inputs.forEach ( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase()
    }
})

function codificar(){
    let txtInput = document.getElementById('txtInput').value;
    let solved = ''
    let shift = parseInt(document.getElementById('shift').value)

    for (var i = 0; i < txtInput.length; i++){
        let ascii_num = txtInput[i].charCodeAt()
        let sum = ascii_num + shift
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += txtInput[i]       
    }
    outInput.value = solved
}

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

}

codeBtn.addEventListener('click', codificar); 
decodeBtn.addEventListener('click', decode); 