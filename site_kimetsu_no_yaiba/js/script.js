// Variáveis globais para armazenar votos e status
let likeCount, dislikeCount, hasVoted, voteType;

document.addEventListener('DOMContentLoaded', function() {
    // Simulação de armazenamento local dos votos e do status do voto
    likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    dislikeCount = parseInt(localStorage.getItem('dislikeCount')) || 0;
    hasVoted = localStorage.getItem('hasVoted') === 'true';
    voteType = localStorage.getItem('voteType');

    // Atualizar a contagem inicial
    document.getElementById('likeCount').textContent = likeCount;
    document.getElementById('dislikeCount').textContent = dislikeCount;

    // Verificar se o usuário já votou
    updateButtons();
});

// Função para lidar com os votos
function vote(type) {
    if (!hasVoted) {
        if (type === 'like') {
            likeCount++;
            localStorage.setItem('likeCount', likeCount);
            localStorage.setItem('voteType', 'like');
        } else if (type === 'dislike') {
            dislikeCount++;
            localStorage.setItem('dislikeCount', dislikeCount);
            localStorage.setItem('voteType', 'dislike');
        }

        // Registrar que o usuário já votou
        hasVoted = true;  // Atualiza a variável global
        localStorage.setItem('hasVoted', 'true');

        // Atualizar a contagem exibida
        document.getElementById('likeCount').textContent = likeCount;
        document.getElementById('dislikeCount').textContent = dislikeCount;
    }

    // Desabilitar botões após o voto
    updateButtons();
}

// Função para anular o voto
function cancelVote() {
    if (hasVoted) {
        // Decrementar a contagem conforme o tipo de voto anterior
        if (voteType === 'like') {
            likeCount--;
            localStorage.setItem('likeCount', likeCount);
        } else if (voteType === 'dislike') {
            dislikeCount--;
            localStorage.setItem('dislikeCount', dislikeCount);
        }

        // Atualizar o status de voto
        hasVoted = false;  // Atualiza a variável global
        localStorage.setItem('hasVoted', 'false');
        localStorage.removeItem('voteType');

        // Atualizar a contagem exibida
        document.getElementById('likeCount').textContent = likeCount;
        document.getElementById('dislikeCount').textContent = dislikeCount;
    }

    // Habilitar os botões
    updateButtons();
}

// Função para atualizar o estado dos botões
function updateButtons() {
    document.getElementById('likeBtn').disabled = hasVoted;
    document.getElementById('dislikeBtn').disabled = hasVoted;
}
