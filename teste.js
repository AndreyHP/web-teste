//105) Escreva um algoritmo em pseudocodigo para ler um vetor de tamanho 10 e escreva a
//posição de cada elemento com valor igual a 25 neste vetor.

var pronto = 5;
var pos = [" "];
var valores = [" "];
var resposta = "";

function appendArray(v){
    for (var i = 0; i < pronto; i++){
        valores[i] = v;
    };
};

function appendNumber(n){
    for (var i = 0; i < valores.length; i++){
        if (valores[i] == n){
            resposta += `${i}, `;
        }
    };
    return resposta;
};

function pegarValor(){
    let valor = parseInt(document.getElementById("ValorArray").value);
    appendArray(valor);
    document.getElementById("ValorArray").value = " ";//limpa a caixa
    pronto -= 1;//diminui o numero requerido.
    var node = document.getElementById("text");
    var novonode = document.createElement("p");
    novonode.appendChild(document.createTextNode("Restante: " + pronto));
    node.appendChild(novonode);
};

function mostrar(){
    var node = document.getElementById("text");
    var novonode = document.createElement("p");

    if (pronto <=0){
        novonode.appendChild(document.createTextNode(appendNumber(25)));
        node.appendChild(novonode);
    };

};
