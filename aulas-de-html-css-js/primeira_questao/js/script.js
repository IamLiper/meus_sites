const mold = document.querySelector('#moldura')
const text = document.querySelector('#texto')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

bt1.addEventListener('click', filme1);
bt2.addEventListener('click', filme2);
bt3.addEventListener('click', filme3);
bt4.addEventListener('click', filme4);

function filme1(){
    mold.src = 'img/img01.jpg'
    text.textContent = 'Uma nova ameaça capaz de destruir todo o planeta surge fazendo com que Optimus Prime e os Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra.'
}
function filme2(){
    mold.src = 'img/img02.jpg'
    text.textContent = 'Passaram-se dois anos desde que Sam Witwicky e os Autobots salvaram a raça humana e tentam ter uma vida normal: Sam está começando a faculdade, enquanto os Autobots trabalham com uma organização militar secreta e tentam construir uma casa para eles na Terra. Porém, um antigo Decepticon conhecido como the fallem aparece para se vingar, então Sam e sua namorada Mikaela precisam desvendar a história dos Transformes e achar um caminho para derrotá-lo.'
}
function filme3(){
    mold.src = 'img/img03.jpg'
    text.textContent = 'Sam Witwicky e sua nova namorada, Carly, entram na briga quando os Decepticons renovam sua guerra contra os Autobots. Optimus Prime acredita que ressuscitar o antigo Transformer Sentinel Prime, ex-líder dos Autobots, pode levar à vitória. Essa decisão tem consequências devastadoras e a guerra parece pender a favor dos Decepticons, causando um conflito épico em Chicago.'
}
function filme4(){
    mold.src = 'img/img04.jpg'
    text.textContent = 'Depois da batalha entre Autobots e Decepticons, que arrasou Chicago, os gigantescos robôs alienígenas desaparecem. Agora, eles são caçados pelos humanos, que não desejam passar por problemas novamente. Porém, enquanto a humanidade tenta se recuperar dessa terrível batalha, uma nova ameaça paira sobre a Terra.'
}