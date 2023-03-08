const listaDeNumeros = document.querySelectorAll('input[type="button"]');

for(let contador = 0; contador < listaDeNumeros.length; contador++){
    const numero = listaDeNumeros[contador];
    const numeroClicado = numero.value
    numero.onclick = function(){
        numeroTelefone(numeroClicado);
   }
}

function numeroTelefone(idNumeroAdicionado){
    document.querySelector('input[type="tel"]').value += idNumeroAdicionado;
}