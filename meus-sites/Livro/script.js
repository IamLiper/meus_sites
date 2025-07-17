function toggleMenu() {
  document.getElementById('menu').classList.toggle('escondido');
}

function alternarModo() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  localStorage.setItem('modo', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function navegar(pagina) {
  const conteudo = document.getElementById('conteudo');
  document.getElementById('menu').classList.add('escondido'); // Fecha menu ao navegar

  if (pagina === 'todos') {
    conteudo.innerHTML = `
      <h2>📚 Todos os Livros</h2>
      <ul>
        <li><button class="btn" onclick="abrirLivro('a-moreninha')">A Moreninha</button></li>
      </ul>
    `;
  }

  else if (pagina === 'favoritos') {
    const favs = getFavoritos().filter(nome => nome === 'a-moreninha');
    conteudo.innerHTML = `
      <h2>❤️ Seus Favoritos</h2>
      <ul>
        ${favs.length ? favs.map(nome => `
          <li>
            <button class="btn" onclick="abrirLivro('${nome}')">${formatarNomeLivro(nome)}</button>
            <button class="btn" onclick="toggleFavorito('${nome}')">Remover ❤️</button>
          </li>
        `).join('') : '<p>Você ainda não favoritou nenhum livro.</p>'}
      </ul>
    `;
  }

  else if (pagina === 'lendo') {
    // Pegue todos os livros disponíveis
    const livros = ['a-moreninha'];
    // Procure o último livro lido (com progresso > 0)
    let ultimoLivro = null;
    let ultimaPagina = 0;
    livros.forEach(nome => {
      const prog = getProgresso(nome);
      if (prog > 0) {
        ultimoLivro = nome;
        ultimaPagina = prog;
      }
    });

    if (ultimoLivro) {
      conteudo.innerHTML = `
        <h2>📖 Lendo Agora</h2>
        <p>Você parou no capítulo ${ultimaPagina + 1} de <b>${formatarNomeLivro(ultimoLivro)}</b>.</p>
        <button class="btn" onclick="abrirLivro('${ultimoLivro}', ${ultimaPagina})">Continuar lendo</button>
      `;
    } else {
      conteudo.innerHTML = `
        <h2>📖 Lendo Agora</h2>
        <p>Você ainda não começou a ler nenhum livro.</p>
      `;
    }
  }

  else if (pagina === 'config') {
    const modoAtual = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Noturno';
    conteudo.innerHTML = `
      <h2>⚙️ Configurações</h2>
      <button class="btn tema" onclick="alternarModo()">${modoAtual}</button>
    `;
  }
}

function abrirLivro(nome, capInicial) {
  document.getElementById('menu').classList.add('escondido');

  fetch(`livros/${nome}.txt`)
    .then(res => res.text())
    .then(texto => {
      const capitulos = texto.split(/^\s*===CAPITULO===\s*$/m);
      let paginaAtual = typeof capInicial === 'number' ? capInicial : getProgresso(nome);
      if (paginaAtual >= capitulos.length) paginaAtual = 0;

      function renderPagina() {
        document.getElementById('conteudo').innerHTML = `
          <button class="btn voltar" onclick="navegar('todos')">← Voltar</button>
          <button class="btn" onclick="toggleFavorito('${nome}')">
            ${isFavorito(nome) ? '❤️ Remover dos Favoritos' : '🤍 Favoritar'}
          </button>
          <pre id="leitura" style="white-space: pre-wrap; font-family: inherit;">${capitulos[paginaAtual]}</pre>
          <div style="margin-top:20px;">
            <button class="btn" onclick="anteriorPagina()">Capítulo Anterior</button>
            <span>Capítulo ${paginaAtual + 1} de ${capitulos.length}</span>
            <button class="btn" onclick="proximaPagina()">Próximo Capítulo</button>
          </div>
        `;
      }

      window.anteriorPagina = function() {
        if (paginaAtual > 0) {
          paginaAtual--;
          setProgresso(nome, paginaAtual);
          renderPagina();
        }
      };

      window.proximaPagina = function() {
        if (paginaAtual < capitulos.length - 1) {
          paginaAtual++;
          setProgresso(nome, paginaAtual);
          renderPagina();
        }
      };

      setProgresso(nome, paginaAtual); // Salva ao abrir também
      renderPagina();
    });
}

function formatarNomeLivro(nome) {
  if (nome === 'a-moreninha') return 'A Moreninha';
  return nome;
}

// Funções utilitárias para favoritos
function getFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

function setFavoritos(favs) {
  localStorage.setItem('favoritos', JSON.stringify(favs));
}

function toggleFavorito(nome) {
  let favs = getFavoritos();
  if (favs.includes(nome)) {
    favs = favs.filter(f => f !== nome);
  } else {
    favs.push(nome);
  }
  setFavoritos(favs);
  navegar('favoritos');
}

function isFavorito(nome) {
  return getFavoritos().includes(nome);
}

// Funções utilitárias para progresso de leitura
function getProgresso(nome) {
  return parseInt(localStorage.getItem('progresso_' + nome) || '0', 10);
}

function setProgresso(nome, pagina) {
  localStorage.setItem('progresso_' + nome, pagina);
}

window.onload = () => {
  if (localStorage.getItem('modo') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  navegar('todos'); // Página inicial
}
