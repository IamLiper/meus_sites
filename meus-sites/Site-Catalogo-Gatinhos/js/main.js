const container = document.getElementById("cats-container");

cats.forEach(cat => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${cat.imagem}" alt="${cat.nome}">
    <h3>${cat.nome}</h3>
    <p>${cat.raca}</p>
  `;

  card.onclick = () => {
  card.style.transform = "scale(0.95)";
  setTimeout(() => {
    window.location.href = `cat.html?id=${cat.id}`;
  }, 150);
};

  container.appendChild(card);
});