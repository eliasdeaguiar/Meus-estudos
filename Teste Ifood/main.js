function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    let contador = 0;

    for(let index = 0; index<itensColetados.length; index++){
        if(itensColetados[index] === itemNecessario1){
            contador++;
        }
        if(itensColetados[index] === itemNecessario2){
            contador++;
        }
        if(itensColetados[index] === itemNecessario3){
            contador++;
        }
    }
    if(contador === 3){
        return("PODE ENFRENTAR");
    }else{
        return("NAO PODE ENFRENTAR");
    }
}