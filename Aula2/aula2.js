function percorrer(ls) {
    //ls.length => tamanho da lista
    //for(inicio, parada, passo)

    //alert(ls[0])
    //alert(ls[1])

    for (let i = 0; i < ls.length; i++) {
        document.write(i + " => " + ls[i] + "<br>");
    }
}

function ola() {
    alert("Olá mundo!");
}

function def() {
    //lista vazia -> []
    //push: inserir
    //pop: remover
    //update: acesso via indice
    var lista = [];
    lista.push(1, 1.5, "true", 1.7, "Dani");
    lista.push(12);
    var ret = lista.pop();
    document.write(lista + "<br>");
    document.write(ret + "<br>");
    document.write(lista[2], "\t");
    percorrer(lista);
}