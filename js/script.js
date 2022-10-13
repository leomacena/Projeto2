let criptoBtn = document.getElementById("criptografar");
let outInput = document.getElementById("outInput");
let txtInput = document.getElementById("txtInput");
let inputs = [outInput,txtInput];
let decifrarBtn = document.getElementById("decifrar");

inputs.forEach ( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase()
    }
})

function criptografar(){
    let txtInput = document.getElementById('txtInput').value;
    let solved = ''
    let shift = parseInt(document.getElementById('shift').value)

    for (var i = 0; i< txtInput.length; i++){
        let ascii_num = txtInput[i].charCodeAt()
        let sum = ascii_num + shift
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += txtInput[i]       
    }
    outInput.value = solved
}

function decifrar(){

}

criptoBtn.addEventListener('click', criptografar); 
decifrarBtn.addEventListener('click', decifrar); 