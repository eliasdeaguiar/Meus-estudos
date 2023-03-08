let receberNumeros1 = parseInt(prompt('Digite o primeiro número que você deseja saber o minimo multiplo comum.'))
let receberNumeros2 = parseInt(prompt('Digite o segundo número que você deseja sabe o minimo multiplo comum.'))
let numeroComparacao1 = 0;
let numeroComparacao2 = 0;
let mmcNumeroParaImprimir = 1;
let index = 2;

if(receberNumeros1 > receberNumeros2){
    numeroComparacao1 = parseInt(receberNumeros1);
    numeroComparacao2 = parseInt(receberNumeros2);
}else{
    numeroComparacao1 = parseInt(receberNumeros2);
    numeroComparacao2 = parseInt(receberNumeros1);
}


while(numeroComparacao1 > 1 && numeroComparacao2 > 1){
    if(numeroComparacao1 % index == 0 && numeroComparacao2 % index == 0){
        while(numeroComparacao1 % index == 0 && numeroComparacao2 % index == 0 && numeroComparacao1 != 1 && numeroComparacao2 != 1){
                numeroComparacao1 = numeroComparacao1 / index;
                numeroComparacao2 = numeroComparacao2 / index;
                mmcNumeroParaImprimir = mmcNumeroParaImprimir * index;
                if(numeroComparacao1 % index != 0 || numeroComparacao2 % index != 0){
                    numeroComparacao1 = 1;
                    numeroComparacao2 = 1;
                }
        }
    }
    index++;
    if(index > numeroComparacao1 || index > numeroComparacao2){
        numeroComparacao1 = 1;
        numeroComparacao2 = 1;
    }
}

document.querySelector('#output').innerHTML ='O minimo multiplo comum de '+receberNumeros1+' e de '+ receberNumeros2+ ' é: '+ mmcNumeroParaImprimir;
document.querySelector('#output1').innerHTML = receberNumeros1 + ' dividido por '+mmcNumeroParaImprimir+ ' é igual a: ' + (receberNumeros1/mmcNumeroParaImprimir)+' <br> '+ receberNumeros2 + ' dividido por: '+mmcNumeroParaImprimir+ ' é igual a: '+ (receberNumeros2/mmcNumeroParaImprimir);





// const mmc = [];
// const mmc2 = [];

// let mmcReceberNumeros1 = receberNumeros1;
// let mmcReceberNumeros2 = receberNumeros2;
// let receberNumerosComparacao = 0;

// if( mmcReceberNumeros1 > mmcReceberNumeros2){
//     receberNumerosComparacao = mmcReceberNumeros1;
// }else{
//     receberNumerosComparacao = mmcReceberNumeros2;
// }

// let receberMmc1 = 1;
// let receberMmc2 = 1;

// for(let compararMmc = 2; compararMmc <= receberNumerosComparacao; compararMmc++){
//     while(mmcReceberNumeros1 % compararMmc == 0 && mmcReceberNumeros1 > 0 && mmcReceberNumeros1 != 1 && mmcReceberNumeros1 <= receberNumerosComparacao){
//         mmc.push(compararMmc)

//         mmcReceberNumeros1 = mmcReceberNumeros1 / compararMmc;
//         receberMmc1 = receberMmc1 * compararMmc;
//     }
//     while(mmcReceberNumeros2 % compararMmc == 0 && mmcReceberNumeros2 > 0 && mmcReceberNumeros2 != 1){
//         mmc2.push(compararMmc)

//         mmcReceberNumeros2 = mmcReceberNumeros2 / compararMmc;
//         receberMmc2 = receberMmc2 * compararMmc;
//     }
// }







// let subtrairNumero = 0;
// let receberMmc = 1;
// let index = receberNumeros;

// while(index >=1){
//     if( index % 2 == 0){
//         subtrairNumero = subtrairNumero + 2;
//         receberMmc = 2 * receberMmc;
//     }
//     if( index % 3 == 0){
//         subtrairNumero = subtrairNumero + 3;
//         receberMmc = 3 * receberMmc;
//     }
//     if( index % 5 == 0){
//         subtrairNumero = subtrairNumero + 5;
//         receberMmc = 5 * receberMmc;
//     }
//     index = index - subtrairNumero
// }

// for(let index = receberNumeros; index >= 1; index-subtrairNumero){
//     if( index % 2 == 0){
//         subtrairNumero = subtrairNumero + 2;
//         receberMmc = 2 * receberMmc;
//     }
// }

// document.querySelector('#output').innerHTML = receberMmc1;
// document.querySelector('#output_mmc').innerHTML = mmc;

// document.querySelector('#output2').innerHTML = receberMmc2;
// document.querySelector('#output_mmc2').innerHTML = mmc2;

// console.log(mmc)
// console.log(mmc2)