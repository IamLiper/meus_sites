 // DOM
 
const cdd = document.querySelector('.input-cidade')
const bt = document.querySelector('.botao-busca')
const text_cdd = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const chave = '60300380877d202ccbe6d8275e1e1e4c'

// Event

bt.addEventListener('click', buscar)

// Funcão

async function buscar(){
    nome_cidade = cdd.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${chave}&units=metric&lang=br`)
    .then(resposta=>resposta.json())

    console.log(dados)
}