// Configurações e variáveis globais
let intervalos = [];

// Elementos do DOM
const magicButton = document.getElementById('magicButton');
const friendshipLetter = document.getElementById('friendshipLetter');
const specialInfo = document.getElementById('specialInfo');
const footerMessage = document.querySelector('.footer-message');
const loadingOverlay = document.getElementById('loadingOverlay');
const profilePhoto = document.getElementById('profilePhoto');
const letterDate = document.getElementById('letterDate');
const confetti = document.getElementById('confetti');

// Array com as fotos da Jheni
const photos = ['jheni1.jpg', 'jheni2.jpg', 'jheni3.jpg'];
let currentPhotoIndex = 0;

// Data de início da amizade (15 de outubro às 10:00)
const startDate = new Date('2025-10-15T10:00:00');

// Classe para gerenciar efeitos visuais
class EfeitosVisuais {
    constructor() {
        this.starsContainer = document.getElementById('starsContainer');
        this.bubblesContainer = document.getElementById('bubblesContainer');
        this.sparklesContainer = document.getElementById('sparklesContainer');
        this.cloudsContainer = document.getElementById('cloudsContainer');
        
        this.iniciarEfeitos();
    }
    
    iniciarEfeitos() {
        // Criar estrelas
        this.criarEstrelas();
        
        // Iniciar bolhas flutuantes
        setInterval(() => this.criarBolha(), 2500);
        
        // Iniciar brilhos
        setInterval(() => this.criarBrilho(), 1800);
        
        // Iniciar nuvens
        setInterval(() => this.criarNuvem(), 8000);
    }
    
    criarEstrelas() {
        for (let i = 0; i < 60; i++) {
            const estrela = document.createElement('div');
            estrela.className = 'star-particle';
            estrela.innerHTML = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
            estrela.style.left = Math.random() * 100 + '%';
            estrela.style.top = Math.random() * 100 + '%';
            estrela.style.fontSize = (Math.random() * 12 + 10) + 'px';
            estrela.style.animationDelay = Math.random() * 4 + 's';
            estrela.style.animationDuration = (Math.random() * 2 + 3) + 's';
            this.starsContainer.appendChild(estrela);
        }
    }
    
    criarBolha() {
        const bolha = document.createElement('div');
        bolha.className = 'bubble-particle';
        
        const tamanho = Math.random() * 40 + 20;
        bolha.style.width = tamanho + 'px';
        bolha.style.height = tamanho + 'px';
        bolha.style.left = Math.random() * 100 + '%';
        bolha.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        this.bubblesContainer.appendChild(bolha);
        
        setTimeout(() => {
            if (bolha.parentNode) {
                bolha.remove();
            }
        }, 10000);
    }
    
    criarBrilho() {
        const brilho = document.createElement('div');
        brilho.className = 'sparkle-particle';
        brilho.innerHTML = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
        
        brilho.style.left = Math.random() * 100 + '%';
        brilho.style.top = Math.random() * 100 + '%';
        brilho.style.fontSize = (Math.random() * 10 + 12) + 'px';
        brilho.style.animationDelay = Math.random() * 2 + 's';
        brilho.style.animationDuration = (Math.random() * 2 + 4) + 's';
        
        this.sparklesContainer.appendChild(brilho);
        
        setTimeout(() => {
            if (brilho.parentNode) {
                brilho.remove();
            }
        }, 5000);
    }
    
    criarNuvem() {
        const nuvem = document.createElement('div');
        nuvem.className = 'cloud-particle';
        nuvem.innerHTML = '☁️';
        
        nuvem.style.top = Math.random() * 60 + '%';
        nuvem.style.fontSize = (Math.random() * 20 + 25) + 'px';
        nuvem.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        this.cloudsContainer.appendChild(nuvem);
        
        setTimeout(() => {
            if (nuvem.parentNode) {
                nuvem.remove();
            }
        }, 25000);
    }
    
    criarConfete() {
        const cores = ['#4682b4', '#87ceeb', '#b0e0e6', '#5f9ea0', '#6495ed', '#add8e6'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetePeca = document.createElement('div');
                confetePeca.className = 'confetti-piece';
                confetePeca.style.left = Math.random() * 100 + '%';
                confetePeca.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
                confetePeca.style.animationDelay = Math.random() * 2 + 's';
                confetePeca.style.animationDuration = (Math.random() * 2 + 3) + 's';
                
                // Formas diferentes
                if (Math.random() > 0.5) {
                    confetePeca.style.borderRadius = '50%';
                } else {
                    confetePeca.style.transform = 'rotate(45deg)';
                }
                
                confetti.appendChild(confetePeca);
                
                setTimeout(() => {
                    if (confetePeca.parentNode) {
                        confetePeca.remove();
                    }
                }, 5000);
            }, i * 100);
        }
    }
}

// Função para atualizar o contador de tempo
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - startDate;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = dias;
    document.getElementById('hours').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = segundos.toString().padStart(2, '0');
}

// Função para alternar fotos
function alternarFoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    profilePhoto.src = photos[currentPhotoIndex];
    
    // Efeito de transição suave
    profilePhoto.style.transform = 'scale(0.8) rotate(-10deg)';
    setTimeout(() => {
        profilePhoto.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
}

// Função para mostrar loading
function mostrarLoading(mostrar = true) {
    loadingOverlay.style.display = mostrar ? 'flex' : 'none';
}

// Função principal para mostrar a carta
async function mostrarCarta() {
    try {
        // Mostrar loading
        mostrarLoading(true);
        
        // Esconder o botão
        magicButton.style.display = 'none';
        
        // Simular carregamento
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Esconder loading
        mostrarLoading(false);
        
        // Atualizar data da carta
        letterDate.textContent = new Date().toLocaleDateString('pt-BR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
        
        // Mostrar a carta com animação
        friendshipLetter.style.display = 'block';
        
        // Mostrar informações especiais após delay
        setTimeout(() => {
            specialInfo.style.display = 'block';
        }, 2500);
        
        // Mostrar mensagem de rodapé
        setTimeout(() => {
            footerMessage.style.display = 'block';
        }, 4000);
        
        // Criar confete
        setTimeout(() => {
            efeitos.criarConfete();
        }, 1500);
        
        // Aumentar frequência de bolhas
        const intervalBolha = setInterval(() => {
            efeitos.criarBolha();
        }, 500);
        
        setTimeout(() => {
            clearInterval(intervalBolha);
        }, 8000);
        
        // Aumentar frequência de brilhos
        const intervalBrilho = setInterval(() => {
            efeitos.criarBrilho();
        }, 300);
        
        setTimeout(() => {
            clearInterval(intervalBrilho);
        }, 6000);
        
    } catch (error) {
        console.error('Erro ao mostrar carta:', error);
        mostrarLoading(false);
        
        // Mostrar erro para o usuário
        alert('Ops! Houve um problema ao carregar sua surpresa. Tente novamente em alguns instantes. 💙');
        
        // Restaurar botão
        magicButton.style.display = 'block';
    }
}

// Função para efeito de digitação no título
function efeitoDigitacao(elemento, texto, velocidade = 150) {
    let i = 0;
    elemento.innerHTML = '';
    
    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        }
    }
    
    digitar();
}

// Função para criar efeito de clique
function criarEfeitoClique(e) {
    if (e.target !== magicButton && e.target !== profilePhoto) {
        const simbolos = ['💙', '✨', '🦋', '💫', '⭐'];
        const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
        
        const efeito = document.createElement('div');
        efeito.innerHTML = simbolo;
        efeito.style.position = 'fixed';
        efeito.style.left = e.clientX + 'px';
        efeito.style.top = e.clientY + 'px';
        efeito.style.fontSize = '28px';
        efeito.style.pointerEvents = 'none';
        efeito.style.zIndex = '1000';
        efeito.style.animation = 'clickEffect 2.5s ease-out forwards';
        
        document.body.appendChild(efeito);
        
        setTimeout(() => {
            if (efeito.parentNode) {
                efeito.remove();
            }
        }, 2500);
    }
}

// Função para efeito de partículas no mouse
function criarParticulasMouse(e) {
    if (Math.random() < 0.12) { // 12% de chance
        const particulas = ['✨', '💫', '⭐'];
        const particula = particulas[Math.floor(Math.random() * particulas.length)];
        
        const elemento = document.createElement('div');
        elemento.innerHTML = particula;
        elemento.style.position = 'fixed';
        elemento.style.left = e.clientX + 'px';
        elemento.style.top = e.clientY + 'px';
        elemento.style.fontSize = '16px';
        elemento.style.pointerEvents = 'none';
        elemento.style.zIndex = '999';
        elemento.style.animation = 'mouseSparkle 2s ease-out forwards';
        
        document.body.appendChild(elemento);
        
        setTimeout(() => {
            if (elemento.parentNode) {
                elemento.remove();
            }
        }, 2000);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
    // Inicializar efeitos visuais
    window.efeitos = new EfeitosVisuais();
    
    // Atualizar contador de tempo
    atualizarContador();
    intervalos.push(setInterval(atualizarContador, 1000));
    
    // Efeito de entrada suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 2s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Efeito de digitação no título
    const nomeTitle = document.getElementById('nameTitle');
    const textoOriginal = nomeTitle.textContent;
    setTimeout(() => {
        efeitoDigitacao(nomeTitle, textoOriginal, 180);
    }, 1500);
});

// Event listeners para interações
magicButton.addEventListener('click', mostrarCarta);
profilePhoto.addEventListener('click', alternarFoto);

// Efeito hover no botão
magicButton.addEventListener('mouseenter', () => {
    magicButton.style.transform = 'translateY(-12px) scale(1.1)';
});

magicButton.addEventListener('mouseleave', () => {
    magicButton.style.transform = 'translateY(0) scale(1)';
});

// Efeitos de clique e movimento do mouse
document.addEventListener('click', criarEfeitoClique);
document.addEventListener('mousemove', criarParticulasMouse);

// Efeito de parallax no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.2;
    document.body.style.backgroundPosition = `center ${parallax}px`;
});

// Adicionar CSS para animações dinâmicas
const style = document.createElement('style');
style.textContent = `
    @keyframes clickEffect {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-150px) scale(2);
            opacity: 0;
        }
    }
    
    @keyframes mouseSparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(2.5) rotate(270deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Limpeza ao sair da página
window.addEventListener('beforeunload', () => {
    intervalos.forEach(intervalo => clearInterval(intervalo));
});
