// Dados do perfil da Isabelle
const perfil = {
  nome: 'Princesa❤️',
  apelido: 'Princesa❤️',
  cores: ['Vermelho', 'Preto'],
  comida: 'Macarrão com carne moída',
  series: 'Ponto Cego',
  musicas: ['Henrique Juliano', 'Orochi', 'Adele'],
  jogo: 'Free Fire'
};

// Função para montar a mensagem personalizada
function montarMensagem() {
  return `Oi ${perfil.nome},

Desde o momento que a gente decidiu oficializar — quando você disse "Vamos ss" — eu senti que tudo ficou mais certo. Gosto do seu jeitinho: do jeito que você responde com "${perfil.apelido}" e como rir das minhas bobeiras.

Eu lembro que você ama ${perfil.cores.join(' e ')} e que ${perfil.comida.toLowerCase()} te deixa feliz — quero cozinhar isso pra você qualquer dia.

Você me faz querer ser melhor: mais presente, mais atento, mais eu. Eu amo nossas conversas simples — das figurinhas, das piadas, de você falando que tava com cólica e eu tentando ajudar.

Amo que você curte música e tem gostos tão variados (de ${perfil.musicas.join(', ')}), e que quando a gente combinou de "oficializar" foi natural, como se tudo tivesse combinado pra ser assim.

Esta página é só um jeitinho de transformar em presente o que eu sinto por você. Aperte o botão colorido de novo sempre que quiser e veja, em tempo real, quanto tempo a gente já passou junto — cada segundo faz parte da nossa história.

Com carinho, sempre seu.
— Blake ❤️`;
}

// Função para calcular a diferença de tempo
function computeDiff(startDate, nowDate) {
  let start = new Date(startDate.getTime());
  let now = new Date(nowDate.getTime());
  
  if (now < start) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let years = now.getFullYear() - start.getFullYear();
  let test = new Date(start);
  test.setFullYear(start.getFullYear() + years);
  
  if (test > now) {
    years--;
    test = new Date(start);
    test.setFullYear(start.getFullYear() + years);
  }

  let months = now.getMonth() - test.getMonth();
  if (months < 0) {
    months += 12;
    years--;
    test.setFullYear(test.getFullYear() - 1);
  }
  
  test.setMonth(test.getMonth() + months);
  while (test > now) {
    months--;
    test.setMonth(test.getMonth() - 1);
  }

  let days = Math.floor((now - test) / (1000 * 60 * 60 * 24));
  test.setDate(test.getDate() + days);

  let remainder = now - test;
  let hours = Math.floor(remainder / (1000 * 60 * 60));
  remainder -= hours * (1000 * 60 * 60);
  let minutes = Math.floor(remainder / (1000 * 60));
  remainder -= minutes * (1000 * 60);
  let seconds = Math.floor(remainder / 1000);

  return { years, months, days, hours, minutes, seconds };
}

// Função para formatar a diferença de tempo
function formatDiff(d) {
  const parts = [];
  
  if (d.years) {
    parts.push(d.years + (d.years === 1 ? ' ano' : ' anos'));
  }
  if (d.months) {
    parts.push(d.months + (d.months === 1 ? ' mês' : ' meses'));
  }
  if (d.days) {
    parts.push(d.days + (d.days === 1 ? ' dia' : ' dias'));
  }
  
  const timeString = String(d.hours).padStart(2, '0') + ':' + 
                    String(d.minutes).padStart(2, '0') + ':' + 
                    String(d.seconds).padStart(2, '0');
  parts.push(timeString);
  
  return parts.join(' • ');
}

// Elementos do DOM
const rainbowBtn = document.getElementById('rainbowBtn');
const revealSection = document.getElementById('revealSection');
const messageArea = document.getElementById('messageArea');
const timerArea = document.getElementById('timerArea');
const startDateInput = document.getElementById('startDate');

// Variáveis de controle
let startDate = new Date(startDateInput.value);
let timerInterval = null;

// Função para atualizar o timer
function updateTimer() {
  const now = new Date();
  const diff = computeDiff(startDate, now);
  const formattedTime = formatDiff(diff);
  const startDateFormatted = startDate.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  timerArea.textContent = `${formattedTime}`;
}

// Função para iniciar o relógio
function startClock() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

// Event listener para mudança na data
startDateInput.addEventListener('change', () => {
  const newDate = new Date(startDateInput.value);
  if (!isNaN(newDate)) {
    startDate = newDate;
    if (revealSection.classList.contains('show')) {
      startClock();
    }
  }
});

// Event listener para o botão principal
rainbowBtn.addEventListener('click', () => {
  // Adiciona animação de pulso
  rainbowBtn.classList.add('pulse');
  setTimeout(() => rainbowBtn.classList.remove('pulse'), 600);

  // Revela ou atualiza o conteúdo
  if (!revealSection.classList.contains('show')) {
    messageArea.textContent = montarMensagem();
    revealSection.classList.add('show');
    startClock();
  } else {
    // Atualiza a mensagem se já estiver visível
    messageArea.textContent = montarMensagem();
  }
});

// Suporte para teclado no botão
rainbowBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    rainbowBtn.click();
  }
});

// Efeito de partículas de coração (opcional)
function createHeartParticle() {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.opacity = '0.7';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '1000';
  heart.style.animation = 'floatUp 4s ease-out forwards';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// CSS para animação de partículas
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.7;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Criar partículas ocasionalmente quando a carta estiver visível
setInterval(() => {
  if (revealSection.classList.contains('show') && Math.random() < 0.3) {
    createHeartParticle();
  }
}, 3000);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Foco inicial no botão para acessibilidade
  rainbowBtn.focus();
});
