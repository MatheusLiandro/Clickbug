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
const moveElemento = (el, veloc, inc) => {

    //executa a cada x milissegundos
    const anima = setInterval(() => {
        veloc = inc + veloc
        el.style.left = (veloc + inc) + 'px'
        //verifica se elemento saiu do quadro
        //ou se foi clicado (classe 'morto')
        //retorna para uma posição à
        //esquerda do quadro
        if (veloc > larguraQuadro || el.classList.contains('morto')) {
            //sorteia um valor entre -50 e -500
            veloc = -Math.random() * 450 + 50
            inc = Math.random() * 40 + 10
            posicElement(el)
            el.classList.remove('morto')



        }
        //Adiciona o atributo velocidade 
        //para consulta no codigo JS
        el.setAttribute('velocidade', inc)

    }, 41.6);

}

//ao clicar nos insetos
const clikBug = (el) => {
    //console.log(el.getAttribute('id'))
    //adiciona a classe morto ao inseto
    el.classList.add('morto')
    //adiciona 10 pts ao score
    score += 10
    //se o inseto clicado for "bonzinho" perde 50pts
    if(el.classList.contains('bonzinho')){
        score -= 60
    }
    document.getElementById('score').innerText = score
    // se velocidade maior que 20, ganha 100 pts
    //apenas nos insetos que tenham a classe invasor
    if (el.getAttribute('velocidade') > 20 && el.classList.contains('invasor')) {
        score += 100
        //esconde +100 apos 1/2 segundo
        let pts100 = document.getElementById('pts100')
        pts100.style.left = el.style.left
        pts100.style.top = el.style.top
         /*const mostra100pts = setInterval(() => {
            pts100.style.left = '-300px'
            //interrompe o setInterval
            clearInterval(mostra100pts)
        }, 1000); */

        const mostra100pts = setTimeout(() => {
            pts100.style.left = '-300px'
        }, 500);

    }

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
    moveElemento(inv, Math.random() * 10, Math.random() * 19 + 1)
    //evt.target = elemento que executa o evento - inseto clicado
    inv.addEventListener('mousedown', (evt) => { clikBug(evt.target) })
}

for (bom of bonzinhos){
    posicElement(bom)
    moveElemento(bom, Math.random() * 10, Math.random() * 19 + 1)
    //evt.target
    bom.addEventListener('mousedown', (evt) => { clikBug(evt.target) })

}

//Contagem regressiva
setTimeout(() => {
    //avisa ao usuario o fim do jogo
    alert('TEMPO ESGOTADO!!!')
    //Recarrega a pagina
    location.reload(true)
    
}, tempoRestante*1000);

const mostraTempo = setInterval(() => {
     //mostra tempo restante
     document.getElementById('infoTR').innerText = tempoRestante
     document.getElementById('temporest').innerText = tempoRestante --
    
}, 1000);
