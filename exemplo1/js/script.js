
function mudaNome(){
   //alert("Hello World!!!")
   const h1 = document.getElementById('nome');
   h1.textContent="👍";
}

function calcular(){

    const vl1 = document.getElementById('vl1').value;
    const vl2 = document.getElementById('vl2').value;
    
    let soma= parseInt(vl1) + parseInt(vl2);
    let sub= parseInt(vl1) - parseInt(vl2);
    let mult= parseInt(vl1) * parseInt(vl2);
    let div= parseInt(vl1) / parseInt(vl2);
    
    alert("A soma é de: " + soma + " A subtração é de: " + sub + " A multiplicação é de: " + mult + " A divisão é de: "+ div);
}

function mostraNome(){
    const nome = document.getElementById('usuario').value;

    alert('Seja bem-vindo: '+nome);
}
function converter(){

    const temp = document.getElementById('temp').value;

    let conv = (parseInt(temp) * 1.8) + 32;

    alert(conv);
}
