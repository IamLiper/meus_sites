//Dom

const hr = document.querySelector('#horas')
const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')
const btligar = document.querySelector('#ligar')
const btdesligar = document.querySelector('#desligar')

//Evento

const id = setInterval(relogio, 1000)

btligar.addEventListener('click', ligar)
btdesligar.addEventListener('click', desligar)

//Funçoes

function ligar(){
    setInterval(relogio, 1000)
    relogio()

    if (btligar.classList.contains('desativado')){
        btligar = btligar.classList.toggle('ativado')
    }
    if (btdesligar.classList.contains('ativado')){
        btdesligar = btdesligar.classList.toggle('desativado')
    }
}

function desligar(){

    if(btdesligar.classList.contains('desativado')){
        btdesligar = btdesligar.classList.toggle('ativado')
    }
    clearInterval(id)
    horas.textContent = '00'
    min.textContent = '00'
    seg.textContent = '00'
}

function relogio(){
    let hoje = new Date()
    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()

    if (h<10){
        h='0'+h
    }

    if (m<10){
        m='0'+m
    }

    if (s<10){
        s='0'+s
    }

    horas.textContent = h
    min.textContent = m
    seg.textContent = s

}