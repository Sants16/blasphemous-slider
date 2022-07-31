const cards = document.querySelectorAll('.cartao') //NodeList com todos os cartões de personagem
const button = document.querySelectorAll('.btn-seta') //NodeList com todos os buttons da pagina
let cardAtual = 0 //Contador que será usado em ambas as funções

function esconderCardSelecionado(){
    const cardSelecionado = document.querySelector('.selecionado')
    cardSelecionado.classList.remove('selecionado')
}

function mostrarCard(indice){
    cards[indice].classList.add('selecionado')
}

const avancarPersonagem = () => {

    if(cardAtual === cards.length -1) return;

    esconderCardSelecionado()

    cardAtual++
    mostrarCard(cardAtual)

}

const voltarPersonagem = () => {

    if(cardAtual === 0) return;

    esconderCardSelecionado()

    cardAtual--
    mostrarCard(cardAtual)

}

button.forEach((button) => {
    if(button.dataset.funcao === 'voltar'){
        button.addEventListener('click', voltarPersonagem)
    } else { 
        button.addEventListener('click', avancarPersonagem)
    }
})