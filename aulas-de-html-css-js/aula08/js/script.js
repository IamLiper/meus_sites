const dist = document.querySelector('#distancia')
const cons = document.querySelector('#consumo')
const price = document.querySelector('#preco')
const bt = document.querySelector('#botao')
const result = document.querySelector('#resultado')

bt.addEventListener('click', calcular)

function calcular(){
  const  distancia = Number(dist.value);
   const consumo = Number(cons.value);
   const preco = Number(price.value);

    calculo = (distancia/consumo)*preco

    result.textContent = `O gasto total para a viagem será de R$${calculo.toFixed(2)}`
}