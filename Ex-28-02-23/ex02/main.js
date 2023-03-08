let receberNumeros = prompt('Digite o número que você deseja saber quantas combinações 3 dados de 6 lados oferecem')

let contadorSomaDeLados = 0;

for(let index1 = 1; index1 <= 6; index1++){
    for(let index2 = 1; index2 <= 6; index2++){
        for(let index3 = 1; index3 <= 6; index3++){
            if((index1 + index2 + index3) == receberNumeros){
                contadorSomaDeLados++
            }
        }
    }
}

console.log(contadorSomaDeLados);
contadorSomaDeLados = contadorSomaDeLados / 216;
document.querySelector('#output').innerHTML = (contadorSomaDeLados*100).toFixed(2) + '%';