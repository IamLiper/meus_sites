const img = document.querySelector('#stealth')
const buttons = document.querySelector('.buttons')
const conteiner = document.querySelector('.central')
buttons.addEventListener('click', trocar);

function trocar(event){
    const id = event.target.id
    
    if (id === 'btraiva') {
        img.src = 'imgs/01.png'
        conteiner.style.backgroundColor = 'darkred'
    }
    if (id === 'btalegria') {
        img.src = 'imgs/02.png'
        conteiner.style.backgroundColor = 'yellow'
    }
    if (id === 'btnojinho') {
        img.src = 'imgs/03.png'
        conteiner.style.backgroundColor = 'darkgreen'
    }
    if (id === 'bttristeza') {
        img.src = 'imgs/04.png'
        conteiner.style.backgroundColor = 'darkblue'
    }
    if (id === 'btstealth') {
        img.src = 'imgs/silhueta.png'
        conteiner.style.backgroundColor = 'white'
    }
}