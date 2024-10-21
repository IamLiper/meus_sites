const kg = document.querySelector('#kg')
const m = document.querySelector('#m')
const bt = document.querySelector('#botao')
const result2 = document.querySelector('#resultadoimc')
const result = document.querySelector('#resultado')

bt.addEventListener('click', calcular)

function calcular() {
    const kilo = Number(kg.value);
    const metros = Number(m.value);

    calculo = kilo/(metros*metros)
    console.log(calculo)

    
    result.textContent = `Seu IMC: ${calculo.toFixed(2)}`

    if (calculo < 18,5){
        result2.textContent = 'Magreza'
    }
    if (calculo >= 18,5 && calculo < 25){
        result2.textContent = 'Peso Normal'
    }
    if (calculo >= 25 && calculo <30){
        result2.textContent = 'Acima do Peso'
    }
    if (calculo >= 30){
        result2.textContent = 'Obesidade'
    }
}