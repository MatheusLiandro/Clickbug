/*
-------------------------------------------------------------------------
    VARIÁVEIS E FUNÇÕES
-------------------------------------------------------------------------
 */


//lista com os invasores
let invasores = document.getElementsByClassName('invasor')




//lista com os "bonzinhos"
let bonzinhos = document.getElementsByClassName('bonzinho')


let score = 0
let tempoRestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth


//Função para posicionar o elemento
//recebe o paremetro el que informa o elemento
const posicElement = (el) => {
    let posX = Math.floor(Math.random() * 900 + 100)
    let PosY = Math.floor(Math.random() * 400)
    el.style.position = 'absolute'
    el.style.left = -posX + 'px'
    el.style.top = PosY + 'px'
}
//desloca os elementos na tela 
//recebe parâmetros elemento, velecidade e incremento
const moveElemento = (el, veloc, inc)=>{

    //executa a cada x milissegundos
    const anima = setInterval(() => {
        veloc = inc + veloc
        el.style.left = (veloc + inc) + 'px'
        //verifica se elemento saiu do quadro e possui a
        //classe emtela
        //Revobe a classe e volta para posição inicial
        if(veloc > larguraQuadro && el.classList.contain('emTela')){
            el.classList.remove('emTela')
            posicElement(el)

        }

    }, 41.6);

}

/* 
-------------------------------------------------------------------------
    VEVENTOS E EXECUÇÕES AUTOMÁTICAS
-------------------------------------------------------------------------    
*/

/* 
for (variavel of coleção) {
    execução
}
 */


// Função para posicionar os itens de uma coleção de itens

for (inv of invasores) {
    posicElement(inv)
    moveElemento(inv, 5,Math.random()*5+5)
}

