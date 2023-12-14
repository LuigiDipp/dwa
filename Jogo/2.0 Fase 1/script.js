document.addEventListener('DOMContentLoaded', function () {
    const player = document.getElementById('player');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const answerBtn = document.getElementById('answer-btn');
    const heartsContainer = document.getElementById('hearts-container');
    const lifeBar = document.getElementById('life-bar');

    let playerPosition = 0;
    let currentQuestionIndex = 0;
    let playerLife = 3;
    let initialLifeWidth = 100;
    lifeBar.style.width = initialLifeWidth + 'px';

    const hearts = [document.getElementById('heart1'), document.getElementById('heart2'), document.getElementById('heart3')];

    const questions = [
        {
            question: '1. O que é programação?',
            options: ['Um método', 'Uma maneira de dar instruções a um computador', 'Um sistema operacional', 'Uma forma de resolver um problema'],
            correctAnswer: 'Uma maneira de dar instruções a um computador'
        },
        {
            question: '2. O que é um algoritmo?',
            options: ['Um tipo de linguagem de programação', 'Uma sequência de passos para realizar uma tarefa', 'Um bug no código', 'Um sistema operacional'],
            correctAnswer: 'Uma sequência de passos para realizar uma tarefa'
        },
        {
            question: '3. O que é uma variável em programação?',
            options: ['Um tipo de dado', 'Uma função', 'Um valor constante', 'Um local para armazenar dados'],
            correctAnswer: 'Um local para armazenar dados'
        },
        {
            question: '4. O que significa HTML?',
            options: ['HyperText Markup Language', 'High-level Text Language', 'HyperTransfer Markup Language', 'High-level Transfer Language'],
            correctAnswer: 'HyperText Markup Language'
        },
        {
            question: '5. O que é JavaScript?',
            options: ['Uma linguagem de marcação', 'Um estilo de folha de estilo', 'Uma linguagem de programação', 'Um banco de dados'],
            correctAnswer: 'Uma linguagem de programação'
        },
        {
            question: '6. Qual é o símbolo de atribuição em muitas linguagens de programação?',
            options: ['=', ':', '+', '-'],
            correctAnswer: '='
        },
        {
            question: '7. O que é um loop em programação?',
            options: ['Um bug no código', 'Uma função especial', 'Uma estrutura de controle que repete um bloco de código', 'Um tipo de variável'],
            correctAnswer: 'Uma estrutura de controle que repete um bloco de código'
        },
        {
            question: '8. O que é um array?',
            options: ['Um tipo de dado', 'Uma estrutura de controle', 'Um tipo de variável', 'Uma coleção de elementos do mesmo tipo'],
            correctAnswer: 'Uma coleção de elementos do mesmo tipo'
        },
        {
            question: '9. O que é uma função em programação?',
            options: ['Um tipo de variável', 'Um loop', 'Um bloco de código que realiza uma tarefa específica', 'Um tipo de dado'],
            correctAnswer: 'Um bloco de código que realiza uma tarefa específica'
        },
        {
            question: '10. O que é Git?',
            options: ['Uma linguagem de programação', 'Um sistema operacional', 'Um sistema de controle de versão', 'Um tipo de banco de dados'],
            correctAnswer: 'Um sistema de controle de versão'
        }
    ];

    function playFireworksAnimation() {
        const fireworks = document.createElement('div');
        fireworks.className = 'fireworks';
        document.body.appendChild(fireworks);

        setTimeout(() => {
            document.body.removeChild(fireworks);
        }, 5000);
    }

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function jumpAndReset() {
        playerPosition += 140;
        player.style.marginLeft = playerPosition + 'px';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            document.getElementById('notification').style.display = 'block';
            playFireworksAnimation();

            setTimeout(() => {
                document.getElementById('notification').style.display = 'none';
                alert('Parabéns! Você concluiu o jogo.');
                // Redirecionar para a página index.html
                window.location.href = 'index1.html';
            }, 5000);
        }
    }

    function checkAnswer(answer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.correctAnswer) {
            alert('Resposta correta! Avance para a próxima pergunta.');
            jumpAndReset();
        } else {
            alert('Resposta incorreta. Você perdeu uma vida!');
            playerLife--;

            const newLifeWidth = initialLifeWidth * (playerLife / 3);
            lifeBar.style.width = newLifeWidth + 'px';

            const lostHeart = document.getElementById('heart' + playerLife);
            lostHeart.style.display = 'none';

            if (playerLife <= 0) {
                alert('Você perdeu todas as vidas. Reiniciando o jogo.');
                resetGame();
            }
        }
    }

    function resetGame() {
        playerPosition = 0;
        player.style.marginLeft = playerPosition + 'px';
        currentQuestionIndex = 0;
        playerLife = 3;
        initialLifeWidth = 100;
        lifeBar.style.width = initialLifeWidth + 'px';

        hearts.forEach((heart) => {
            heart.style.display = 'inline-block';
            heart.style.animation = 'none';
        });

        displayQuestion();
    }

    // Iniciar o jogo
    displayQuestion();

    answerBtn.addEventListener('click', () => {
        alert('Por favor, escolha uma resposta.');
    });
});
