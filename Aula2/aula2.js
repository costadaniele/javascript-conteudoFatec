function percorrer(ls){
    //ls.length => tamanho da lista
    //for(inicio,parada,passo)
    
    //alert(ls[0])
    //alert(ls[1])
    //alert(ls[2])
    //...
    //alert(ls[ls.length - 1])
    for(let i = 0; i < ls.length; i++){
        alert(i + " => " + ls[i]);
    }
    
}

function ola(){
    alert("OLA MUNDO");
}

function def(){
    //LISTA VAZIA -> []
    //Push: Inserir elementos na lista
    //Pop: Remover
    //Update: Acesso via indice
    var lista = [];
    lista.push(1,2,"True",5.7,true,"Q");
    lista.push(7);
    var ret = lista.pop();
    document.write(lista + "<br>");
    document.write(ret + "<br>");
    document.write(lista[1]);
    percorrer(lista);
}
