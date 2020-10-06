function ex1(){
    var div = document.createElement("div");
    div.innerHTML = "Cor amarela";
    div.classList.add("amarelo");
    document.body.appendChild(div);
}



/*7) Faça funções para o que está se pedindo:

1. Uma função que capture todos os parágrafos de um documento e mostre o conteúdo deles no próprio documento.
2. Um botão de valor inicial OK em html que ao ser clicado seu nome e mudado para "Click". Se for clicado novamente o valor volta a ser OK*/

function ex7(){
    var div = document.querySelector(".container");
    var novoBtn = document.createElement("button");
    novoBtn.innerHTML = "novo";
    document.body.replaceChild(novoBtn, div);
}