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
        - Passo 3 - Fazer o cartão anterior aparecer;
            - 3.1 - a classe 'selecionado' deve aparecer no elemento <li> no cartão atual, que será exibido;
        - Passo 4 - Buscar o cartão que está selecionado e esconder;

*/

/*Oj.1 - Passo 1 - Pegar o elemento HTML da seta avançar;*/
//o id aqui não precisa colocar a '#'
const btnAvancar = document.getElementById("btn-avancar");

/*Obj.2. Quando clicar na seta de voltar, tem que mostrar o cartão anterior da lista:
        - Passo 1 - Pegar o elemento HTML da seta voltar;*/
const btnVoltar = document.getElementById("btn-voltar");

//querySelectorAll() - está buscando todos os elementos que tem a classe '.cartao';
const cartoes = document.querySelectorAll(".cartao");
//está apontando para o primeiro cartão, na posição '0', o Pikachu



let cartaoAtual = 0;

/*Oj.1 - Passo 2 - Identificar o clique do usuário na seta avançar;
addEventListener() - Fica aguardando o evento descriminado 'click' acontecer para executar a ação que está dentro do método*/
btnAvancar.addEventListener("click", function () {

    /*'==' é igual? e '===' é identico? - O '- 1' é pq o tamanho da lista é '3' mas as posições vão de '0' a '2', então para ser compatível com a contagem e comparar corretamente coloca-se o '-1'*/ 
    // console.log("Cartão atual: ", cartaoAtual);
    // console.log("lista de cartões: ", cartoes.length - 1);
    // Se essa condição for satirfeita, então 'return' retorne/pare a execução aqui e não mostra mais nada do que está abaixo - cláusula de guarda
    if(cartaoAtual === cartoes.length - 1) return; 

     /*Oj.1 - Passo 4 - Buscar o cartão que está selecionado e esconder:
            - 4.1 - a classe 'selecionado' no elemento <li> não deve aparecer mais cartão no cartão que será escondido;*/
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    /*Oj.1 - Passo 3 - Fazer o próximo cartão aparecer;
    Para saber qual o próximo, é preciso ter uma lista/um vetor de cartões*/
    cartaoAtual++; //aqui o cartão atual não é mais o da posição zero e sim '1', o Charizard
    //console.log("Cartão atual após último clique: ", cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
    
   
    
});


/*Obj.2. Quando clicar na seta de voltar, tem que mostrar o cartão anterior da lista:
        - Passo 2 - Identificar o clique do usuário na seta voltar;*/

btnVoltar.addEventListener("click", function() {

    if(cartaoAtual === 0) return; //se o cartão atual for o da posição zero, return, pare a execução, pois já está no primeiro cartão da lista
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    

    cartaoAtual--;
    console.log(cartaoAtual);

    /*Obj.2. Quando clicar na seta de voltar, tem que mostrar o cartão anterior da lista:
        -Passo 3 - Fazer o cartão anterior aparecer;
            - 3.1 - a classe 'selecionado' deve aparecer no elemento <li> no cartão atual, que será exibido;*/
    cartoes[cartaoAtual].classList.add("selecionado");

    /*Obj.2. Quando clicar na seta de voltar, tem que mostrar o cartão anterior da lista:
        -Passo 4 - Buscar o cartão que está selecionado e esconder;*/
    


});





