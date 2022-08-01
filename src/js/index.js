/*
Objetivos:
    1. Quando clicar na seta de avançar, tem que mostrar o próximo cartão da lista:
        - Passo 1 - Pegar o elemento HTML da seta avançar;
        - Passo 2 - Identificar o clique do usuário na seta avançar;
        - Passo 3 - Fazer o próximo cartão aparecer:
            - 3.1 - a classe 'selecionado' precisa estar no elemento <li> do próximo cartão;
        - Passo 4 - Buscar o cartão que está selecionado e esconder:
            - 4.1 - a classe 'selecionado' no elemento <li> não deve aparecer mais cartão no cartão que será escondido;

    2. Quando clicar na seta de voltar, tem que mostrar o cartão anterior da lista:
        - Passo 1 - Pegar o elemento HTML da seta voltar;
        - Passo 2 - Identificar o clique do usuário na seta voltar;
        - Passo 3 - Fazer o cartão anterior aparecer;
            - 3.1 - a classe 'selecionado' deve aparecer no elemento <li> no cartão atual, que será exibido;
        - Passo 4 - Buscar o cartão que está selecionado e esconder;

*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {    
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {    
    if(cartaoAtual === cartoes.length - 1) return;    
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);    
});

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) return;    
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});





