const texto = document.querySelector('#texto')
const botao = document.querySelector('#bt')
const area = document.querySelector('#qrcode')

botao.addEventListener('click', gerando)

function gerando(){
    area.innerHTML = ''
    new QRCode(area, {
        text:texto.value,
        width: 300,
        heigth: 300,
        colorLight: 'transparent',
        colorDark: 'black'
    })
}