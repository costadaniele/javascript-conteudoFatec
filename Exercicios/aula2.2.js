function maior(lista){
    var maior = lista[0];
    for(let i = 0; i < lista.length; i++){
        maior = Math.max(maior,lista[i]);    
    }
    return maior;
}

function somar(lista){
    var soma = 0;
    for(let i = 0; i < lista.length; i++){
        soma = soma + lista[i];
    }
    return soma;
}

function chamar(){
    var retorno = somar([1,2,3,4,5,6,7]);
    var retMaior = maior([5,-9,7,-32,15,0,1,-2]);
    document.write(retorno + "<br>");
    document.write(retMaior);
}
