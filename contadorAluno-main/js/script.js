function resetar(){
    const h1 = document.getElementById('cont');

    h1.textContent="0";
    
}
function decrementar() {
    
    const h1 = document.getElementById('cont');

    h1.textContent=parseInt(h1.textContent)-1;

}

function incrementar() {
    
    const h1 = document.getElementById('cont');

    h1.textContent=parseInt(h1.textContent)+1;
    
}