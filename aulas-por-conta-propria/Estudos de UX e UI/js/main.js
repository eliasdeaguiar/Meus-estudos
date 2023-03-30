const listaDesignThinking = document.querySelectorAll('.lista_design_thinking');
var etapaClicada = ''
window.addEventListener('click', function(event){
    etapaClicada = event.originalTarget.id;
    for(let contador = 0; contador < listaDesignThinking.length; contador++){
        if(etapaClicada == listaDesignThinking[contador].parentElement.id){
            if(listaDesignThinking[contador].classList.contains('aparecer')){
                listaDesignThinking[contador].classList.replace('aparecer', 'esconder');
            }else{
                listaDesignThinking[contador].classList.replace('esconder', 'aparecer');
            }
        }else{
            listaDesignThinking[contador].classList.replace('aparecer', 'esconder');
        }
    }
})