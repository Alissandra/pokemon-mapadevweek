//window.alert('oi');

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
        - Passo 3 - Fazer o cartão anteior aparecer;
            - 3.1 - 
        - Passo 4 - Buscar o cartão que está selecionado e esconder;

*/

/*Oj.1 - Passo 1 - Pegar o elemento HTML da seta avançar;*/
//o id aqui não precisa colocar a '#'
const btnAvancar = document.getElementById('btn-avancar');

/*Oj.1 - Passo 2 - Identificar o clique do usuário na seta avançar;*/
//addEventListener() - 
btnAvancar.addEventListener('click', function () {
    /*Oj.1 - Passo 3 - Fazer o próximo cartão aparecer;
    Para saber qual o próximo, é preciso ter uma lista/um vetor de cartões*/
    //querySelectorAll() - 
    const cartoes = document.querySelectorAll('.cartao');
    cartoes[1].classList.add('selecionado');
    
});



