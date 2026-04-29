const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const cat = cats.find(c => c.id == id);

document.getElementById("nome").textContent = cat.nome;
document.getElementById("raca").textContent = cat.raca;
document.getElementById("cor").textContent = cat.cor;
document.getElementById("idade").textContent = cat.idade;
document.getElementById("peso").textContent = cat.peso;
document.getElementById("tamanho").textContent = cat.tamanho;
document.getElementById("descricao").textContent = cat.descricao;
document.getElementById("imagem").src = cat.imagem;

function voltar() {
  window.location.href = "index.html";
}