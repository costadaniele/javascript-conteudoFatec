/*=================== ATIVIDADE =========================

1) Faça uma função que calcule o mínimo de
um vetor de números.*/
function menor(lista){
    var menor = lista[0];
    for (let i = 0; i < lista.length; i++){
        menor = Math.min(menor, lista[i]);
    }
    return menor;
}
function chamadaCalcule(){
    var minimo = menor ([15, 20, -33, 7, -10]);
    document.write(minimo + "<br>");
}

/*2) Faça uma função que receba, via parâmetro,
um vetor de strings e retorne a soma dos tamanhos.*/
function somaString(lista) {
    var soma = 0;
    for (let i = 0; i < lista.length; i++){
        soma = soma + lista[i];
    }
    return soma;
}

function calculoString() {
    var resultadoString = somaString(['Maria', 'Pedro', 'Felipe', 'João']);
    document.write(resultadoString.length + "<br>");
}

/*3) Faça uma função que reverta a ordem de uma lista passa por parâmetro.*/
var nomes = ['Ana', 'Joanna', 'Mariana', 'José', 'Pedro', 'Felipe'];
nomes.sort(ordem);
nomes.reverse();

function ordem(a, b) {
    return a - b;
}

function leia() {
    for (var i = 0; i < nomes.length; i++) {
        document.write(nomes[i] + '\n');
    }
}

/*4) Faça uma função que verifique se uma palavra é um palíndromo.*/

function palindromo(palavra) {
    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function verificar() {
    var palavras = palindromo("fatec");
    document.write("<br>" + palavras + "<br>");
    document.write(palindromo("arara"));
}

/*5) Faça uma função que calcule a média aritmética
e o desvio padrão de um vetor de números.*/
function media(notas) {
    var media = notas[0];
    for (let i = 0; i < notas.length; i++) {
        media = (media + notas[i]) / 2;
    }
    return media;
}

function resultadoMedia() {
    var notas = media([10, 5]);
    document.write("<br>" + notas);
}