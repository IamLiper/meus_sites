//Dom

const men = document.querySelector('#msg')
const day = document.querySelector('#dia')
const month = document.querySelector('#mes')
const year = document.querySelector('#ano')
const hr = document.querySelector('#horas')
const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')
const alvo = document.querySelector('#alvo')

//Evento

const id = setInterval(relogio, 1000)

//Funçoes

function relogio(){
    let hoje = new Date()
    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()
    let d = hoje.getDate()
    let ms = hoje.getMonth()+1
    let y = hoje.getFullYear()

    if (h<10){
        h='0'+h
    }

    if (m<10){
        m='0'+m
    }

    if (s<10){
        s='0'+s
    }

    if (d<10){
        d='0'+d
    }

    if (ms<10){
        ms='0'+ms
    }

    if (y<10){
        y='0'+y
    }

    if (h>=5 && h<12){
        men.textContent = 'BOM DIA!'
        alvo.src= '../imgs/image-manha.png'
    }
    else if (h>=12 && h<18){
        men.textContent = 'BOA TARDE!'
        alvo.src='../imgs/image-tarde.png'
    }
    else{
        men.textContent = 'BOA NOITE!'
        alvo.src='../imgs/image-noite.png'
    }

    day.textContent = d
    month.textContent = ms
    year.textContent = y

    hr.textContent = h
    min.textContent = m
    seg.textContent = s

}