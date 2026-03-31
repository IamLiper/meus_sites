document.addEventListener('DOMContentLoaded', () => {
    const btnReveal = document.getElementById('btn-reveal');
    const btnBack = document.getElementById('btn-back');
    const introScreen = document.getElementById('intro-screen');
    const impalaScreen = document.getElementById('impala-screen');
    const letterScreen = document.getElementById('letter-screen');
    const audioFlicker = document.getElementById('audio-flicker');
    const audioEngine = document.getElementById('audio-engine');
    const audioDoor = document.getElementById('audio-door');
    const body = document.body;

    // Efeito de flicker aleatório
    setInterval(() => {
        if (Math.random() > 0.95) {
            body.classList.add('flicker-active');
            try {
                audioFlicker.volume = 0.05;
                audioFlicker.play();
            } catch (e) {}
            
            setTimeout(() => {
                body.classList.remove('flicker-active');
                try {
                    audioFlicker.pause();
                    audioFlicker.currentTime = 0;
                } catch (e) {}
            }, Math.random() * 300 + 100);
        }
    }, 4000);

    btnReveal.addEventListener('click', () => {
        // 1. Transição com fumaça (Exorcismo)
        const smoke = document.createElement('div');
        smoke.className = 'smoke-transition';
        document.body.appendChild(smoke);
        
        setTimeout(() => {
            smoke.classList.add('smoke-active');
        }, 10);

        // 2. Mudar para a tela do Impala
        setTimeout(() => {
            introScreen.classList.remove('active');
            impalaScreen.classList.add('active');
            impalaScreen.classList.add('impala-active'); // Inicia a animação CSS
            
            // Tocar som de motor
            try {
                audioEngine.volume = 0.4;
                audioEngine.play();
            } catch (e) {}

            smoke.classList.remove('smoke-active');
            setTimeout(() => smoke.remove(), 500);
        }, 800);

        // 3. Após a animação do Impala (4s), mostrar a carta
        setTimeout(() => {
            // Tocar som de porta fechando quando o carro para
            try {
                audioDoor.volume = 0.6;
                audioDoor.play();
            } catch (e) {}

            setTimeout(() => {
                impalaScreen.classList.remove('active');
                impalaScreen.classList.remove('impala-active');
                letterScreen.classList.add('active');
            }, 1000); // Pequena pausa após o carro parar

        }, 4000); // Tempo da animação driveAndStop
    });

    btnBack.addEventListener('click', () => {
        letterScreen.classList.remove('active');
        introScreen.classList.add('active');
    });
});
