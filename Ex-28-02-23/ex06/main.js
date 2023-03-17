const listaDeTeclas = document.querySelectorAll('.teclas');
const listaDeOutput = document.querySelectorAll('.output');
const listaDeLinhas = document.querySelectorAll('.linhas_teclado');
const listaDeTeclasNum = document.querySelectorAll('.teclas_num');
const listaDeTeclasNum2 = document.querySelectorAll('.linhas_teclado_num');
var outputId = '';
var outputIdNaoSelecionado = '';

const container = document.querySelector('#teclado');
const containerTeclado = document.querySelector('#teclado01');
const containerNumerico = document.querySelector('#teclado02');

//Verificação qual botão do teclado virtual foi clicado, transposição do valor teclado para o input selecionado e animação feita.
document.addEventListener("click", function(event){
    if(event.target.closest(".output")){
        outputIdNaoSelecionado = '';
        for(let contador = 0; contador < listaDeOutput.length; contador++){
            if(listaDeOutput[contador].id == event.target.id){
                outputId = document.querySelector(`#${event.target.id}`);
            }
        }
    }
    if(event.target.closest(".teclas") && outputId != ''){
        outputIdNaoSelecionado = outputId;
        for(let contador = 0; contador < listaDeTeclas.length; contador++){
            if(event.target.id == listaDeTeclas[contador].id){
                listaDeTeclas[contador].classList.add('teclado');
                setTimeout(function(){
                    listaDeTeclas[contador].classList.remove('teclado');
                }, 500);
                if(event.target.id == 'CapsLock' || event.target.id == 'CapsLock2' || event.target.id == 'ShiftLeft' || event.target.id == 'ShiftLeft2' || event.target.id == 'Space' || event.target.id == 'Backspace'){
                    if(event.target.id == 'Backspace'){
                        let outputId2 = outputId.value;
                        outputId.value = outputId2.substring(0, outputId2.length -1);
                        return;
                    }
                    if(event.target.id == 'Space'){
                        outputId.value += ' ';
                    }
                    if(event.target.id == 'CapsLock'){
                        mostrarTeclado()
                        
                    }
                    if(event.target.id == 'CapsLock2'){
                        mostrarTeclado()
                    }
                    if(event.target.id == 'ShiftLeft'){
                        mostrarTecladoNum()
                    }
                }else{
                    outputId.value += event.target.firstChild.nodeValue;
                }
                return;
            }
        }
    }
    if(event.target.closest('.teclas_num') && outputId != ''){
        outputIdNaoSelecionado = outputId;
        for(let contador = 0; contador < listaDeTeclasNum.length; contador++){
            if(event.target.id == listaDeTeclasNum[contador].id){
                outputId.value += event.target.firstChild.nodeValue;
                if(outputId.id == 'cpf'){
                    let x = outputId.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
                    outputId.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
                }
                if(outputId.id == 'data-nascimento'){
                    let x = outputId.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
                    outputId.value = !x[2] ? x[1] : x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');
                }
    
                listaDeTeclasNum[contador].classList.add('teclado');
                setTimeout(function(){
                listaDeTeclasNum[contador].classList.remove('teclado');
                }, 500);
                return;
            }
        }
    }

    //Verificação para saber se os teclados vão aparecer e qual deve aparecer
    if(event.target.closest(".teclado_completo")){
        containerNumerico.style.display = 'flex';
        containerTeclado.style.display = 'flex';
        return;
    }
    if(event.target.closest(".teclado_alfabetico")){
        containerNumerico.style.display = 'none';
        containerTeclado.style.display = 'flex';
        return;
    }
    if(event.target.closest(".teclado_numerico")){
        containerNumerico.style.display = 'flex';
        containerTeclado.style.display = 'none';
        return;
    }
    if(event.target.closest(".teclado_nao_some")){
        return;
    }

    containerTeclado.style.display = 'none';
    containerNumerico.style.display = 'none';
})
let contadorParaNaoEntrarMaisDown = 0;
let contadorParaNaoEntrarMaisUp = 0;

document.addEventListener('keyup', function(event){
    if(event.code == 'CapsLock'){
        document.querySelector('#CapsLock').classList.add('teclado');
        setTimeout(function(){
            document.querySelector('#CapsLock').classList.remove('teclado');
        }, 500);
        mostrarTeclado();
        return;
    }
    if(event.code == 'ShiftLeft'){
        if(contadorParaNaoEntrarMaisUp == 0){
            document.querySelector('#ShiftLeft').classList.remove('teclado');
            document.querySelector('#ShiftLeft2').classList.remove('teclado');
            mostrarTecladoNum()
            mostrarTeclado()
            contadorParaNaoEntrarMaisUp++;
            contadorParaNaoEntrarMaisDown = 0;
        }
    }
})
document.addEventListener('keydown', function(event){
    let contadorParaLetras = 0;
    if(event.code == 'ShiftLeft'){
        if(contadorParaNaoEntrarMaisDown == 0){
            document.querySelector('#ShiftLeft').classList.add('teclado');
            document.querySelector('#ShiftLeft2').classList.add('teclado');
            mostrarTecladoNum()
            mostrarTeclado()
            contadorParaNaoEntrarMaisDown++;
            contadorParaNaoEntrarMaisUp = 0;
        }
    }
    for(let contador = 0; contador < listaDeTeclas.length; contador++){
        if(event.code == listaDeTeclas[contador].id){
            if(contadorParaLetras == 0 && outputIdNaoSelecionado != ''){
                if(event.code == 'CapsLock' || event.code == 'ShiftLeft' || event.code == 'Space' || event.code == 'Backspace'){
                    if(event.code == 'Backspace'){
                        let tamanhoOutput = parseInt(outputId.value.length);
                        if(outputId.value[tamanhoOutput-2] == '.' || outputId.value[tamanhoOutput-2] == '-'){
                            let outputId2 = outputId.value;
                            outputId.value = outputId2.substring(0, outputId2.length -2);
                        }else{
                            let outputId2 = outputId.value;
                            outputId.value = outputId2.substring(0, outputId2.length -1);
                        }
                    }
                    // if(event.code == 'Space'){
                    //     outputId.value.replace(/\w/g, ' ');
                    // }
                }else{
                    outputId.value += event.key;
                }
            }
            listaDeTeclas[contador].classList.add('teclado');
            setTimeout(function(){
            listaDeTeclas[contador].classList.remove('teclado');
            }, 500);
            contadorParaLetras++;
        }  
    }

    for(let contador = 0; contador < listaDeTeclasNum.length; contador++){
        if(event.code == listaDeTeclasNum[contador].id){
            if(event.code == listaDeTeclasNum[contador].id){
                if(contadorParaLetras == 0 && outputIdNaoSelecionado != ''){
                    if(outputId.id == 'cpf'){
                        let x = outputId.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
                        outputId.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
                    }
                    if(outputId.id == 'data-nascimento'){
                        let x = outputId.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
                        outputId.value = !x[2] ? x[1] : x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');
                    }
                    outputId.value += event.key;
                }
            }  
            listaDeTeclasNum[contador].classList.add('teclado');
            setTimeout(function(){
                listaDeTeclasNum[contador].classList.remove('teclado');
            }, 500);
            contadorParaLetras++;
        }
    }
    if(event.code == 'CapsLock'){
        document.querySelector('#CapsLock').classList.add('teclado');
        setTimeout(function(){
            document.querySelector('#CapsLock').classList.remove('teclado');
        }, 500);
    }
})

//Mascaras para cpf e data de nascimento
document.getElementById('cpf').addEventListener('input', function (event) {
    let campo = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    event.target.value = !campo[2] ? campo[1] : campo[1] + '.' + campo[2] + (campo[3] ? '.' + campo[3] : '') + (campo[4] ? '-' + campo[4] : '');
});

document.getElementById('data-nascimento').addEventListener('input', function (event) {
    let campo = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    event.target.value = !campo[2] ? campo[1] : campo[1] + '/' + campo[2] + (campo[3] ? '/' + campo[3] : '');
});

function mostrarTeclado(){
    for(let contador = 0; contador < listaDeLinhas.length; contador++){
        if(listaDeLinhas[contador].classList.contains('mostrar_teclado')){
            listaDeLinhas[contador].classList.add('esconder_teclado');
            listaDeLinhas[contador].classList.remove('mostrar_teclado');
        }else{
            listaDeLinhas[contador].classList.remove('esconder_teclado');
            listaDeLinhas[contador].classList.add('mostrar_teclado');
        }
    }
}
function mostrarTecladoNum(){
    for(let contador = 0; contador < listaDeTeclasNum2.length; contador++){
        if(listaDeTeclasNum2[contador].classList.contains('mostrar_teclado')){
            listaDeTeclasNum2[contador].classList.remove('mostrar_teclado');
            listaDeTeclasNum2[contador].classList.add('esconder_teclado');
        }else{
            listaDeTeclasNum2[contador].classList.add('mostrar_teclado');
            listaDeTeclasNum2[contador].classList.remove('esconder_teclado');
        }
    }
}