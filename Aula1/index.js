function ola(){    
    alert("OLA MUNDO!")}

function def(){    
    //LISTA VAZIA    //Push: inserir elementos na lista    //Pop: Remover elemento da lista    //Update:Acesso via indice    
    
    var lista =[];    lista.push(1,2,"True",    5.7,true,"Q");    lista.push(7); 
    //empilhar    
    var ret = lista.pop(); 
    //tira um da lista    
    lista[1] ="OK"; 
    // exemplo de update, sendo inserido o valor diretamente no indice da lista    
    document.write(lista +"<br>");    
    document.write(ret);    
    document.write(lista[1]);}