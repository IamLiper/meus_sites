//DOM

const lampada = document.querySelector('#lamp')
const btligar = document.querySelector('#ligar')
const btdesligar = document.querySelector('#desligar')

//EVENTO

btligar.addEventListener('click', acender)
btdesligar.addEventListener('click', apagar)
lampada.addEventListener('dblclick', lampQuebrar)

//FUNÇÕES

function acender(){
    lampada.src='img/acesa.gif'
}

function apagar(){
    lampada.src='img/apagada.gif'
}

function lampQuebrar(){
    lampada.src='img/quebrada.png'
}