receberNumero = prompt('Digite o número desejado:');

for(let index1 = 0; index1 < receberNumero; index1++){
    for(let index2 = 0; index2 < receberNumero; index2++){
        // const numeroDividido = receberNumero;
        let numeroDivididoPrimeiro = receberNumero / receberNumero;
        if (index2 == receberNumero - 1){
            document.querySelector('#output').innerHTML += numeroDivididoPrimeiro + ', <br>';
            index2++;
        }else{
            if(index1 != 0 && index2 == 0){
                numeroDivididoSegundo = index1 + index2;
                document.querySelector('#output').innerHTML += numeroDivididoSegundo + numeroDivididoPrimeiro  + ' + ';
                // for(let index = 0; index < receberNumero; index += numeroDivididoSegundo + numeroDivididoPrimeiro){
                //     let numeroComparacao = receberNumero;
                //     if(numeroComparacao > 0){
                //         document.querySelector('#output').innerHTML += numeroDivididoSegundo + numeroDivididoPrimeiro  + ' + ';
                //         numeroComparacao = numeroComparacao - (numeroDivididoSegundo + numeroDivididoPrimeiro);
                //     }
                // }
                // document.querySelector('#output').innerHTML += '<br>';
                index2 += numeroDivididoSegundo;
            }else{
                document.querySelector('#output').innerHTML += numeroDivididoPrimeiro + ' + '
            }
        }
    }
    // document.querySelector('#output').innerHTML += '<br>';
}