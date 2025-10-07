// Data de início do relacionamento
const startDate = new Date('2025-02-16T10:00:00');

// Elementos do DOM
const magicButton = document.getElementById('magicButton');
const loveLetter = document.getElementById('loveLetter');
const specialInfo = document.getElementById('specialInfo');
const heartsContainer = document.getElementById('heartsContainer');
const fireworks = document.getElementById('fireworks');
const profilePhoto = document.getElementById('profilePhoto');

// Array com as fotos da Fabíola
const photos = ['fabiola1.jpg', 'fabiola2.jpg', 'fabiola3.jpg'];
let currentPhotoIndex = 0;

// Função para calcular o tempo decorrido
function calculateTimeDifference() {
    const now = new Date();
    const diff = now - startDate;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { years, months, days, hours, minutes, seconds };
}

// Função para atualizar o contador de tempo
function updateTimeCounter() {
    const time = calculateTimeDifference();
    
    document.getElementById('years').textContent = time.years;
    document.getElementById('months').textContent = time.months;
    document.getElementById('days').textContent = time.days;
    document.getElementById('hours').textContent = time.hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = time.minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = time.seconds.toString().padStart(2, '0');
}

// Função para criar partículas de coração
function createHeartParticle() {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💘'][Math.floor(Math.random() * 5)];
    
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Função para criar fogos de artifício
function createFirework(x, y) {
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ff4757', '#ff3838'];
    
    for (let i = 0; i < 12; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (i * 30) * Math.PI / 180;
        const velocity = Math.random() * 100 + 50;
        
        firework.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
        firework.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
        
        firework.style.animation = `fireworkExplode 1s ease-out forwards`;
        firework.style.transform = `translate(var(--dx, 0), var(--dy, 0))`;
        
        fireworks.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Função para alternar fotos
function changePhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    profilePhoto.src = photos[currentPhotoIndex];
    
    // Efeito de transição
    profilePhoto.style.transform = 'scale(0.8)';
    setTimeout(() => {
        profilePhoto.style.transform = 'scale(1)';
    }, 200);
}

// Função para mostrar a carta com efeitos especiais
function showLoveLetter() {
    // Esconder o botão
    magicButton.style.display = 'none';
    
    // Mostrar a carta com animação
    loveLetter.style.display = 'block';
    
    // Mostrar informações especiais após um delay
    setTimeout(() => {
        specialInfo.style.display = 'block';
    }, 2000);
    
    // Criar fogos de artifício
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFirework(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight * 0.5
                );
            }, i * 300);
        }
    }, 1000);
    
    // Aumentar a frequência de corações
    const heartInterval = setInterval(() => {
        createHeartParticle();
    }, 200);
    
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 5000);
}

// Event listeners
magicButton.addEventListener('click', showLoveLetter);

// Clique na foto para alternar
profilePhoto.addEventListener('click', changePhoto);

// Efeito hover no botão
magicButton.addEventListener('mouseenter', () => {
    magicButton.querySelector('.button-hearts').style.opacity = '1';
});

magicButton.addEventListener('mouseleave', () => {
    magicButton.querySelector('.button-hearts').style.opacity = '0';
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Atualizar contador de tempo
    updateTimeCounter();
    setInterval(updateTimeCounter, 1000);
    
    // Criar corações periodicamente
    setInterval(createHeartParticle, 2000);
    
    // Efeito de entrada suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Efeitos especiais no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    document.body.style.backgroundPosition = `center ${parallax}px`;
});

// Efeito de clique em qualquer lugar para criar corações
document.addEventListener('click', (e) => {
    if (e.target !== magicButton && e.target !== profilePhoto) {
        // Criar coração na posição do clique
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'heartFloat 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});

// Adicionar CSS para animação do coração no clique
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Efeito de digitação para o título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação ao carregar
window.addEventListener('load', () => {
    const nameTitle = document.querySelector('.name-title');
    const originalText = nameTitle.textContent;
    typeWriter(nameTitle, originalText, 150);
});

// Efeito de partículas no movimento do mouse
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) { // 10% de chance
        const particle = document.createElement('div');
        particle.innerHTML = '✨';
        particle.style.position = 'fixed';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.fontSize = '12px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        particle.style.animation = 'sparkle 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});

// Adicionar CSS para animação de brilho
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);
