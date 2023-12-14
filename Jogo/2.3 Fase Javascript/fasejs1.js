document.addEventListener('DOMContentLoaded', function () {
    const hero = document.getElementById('hero');
    const commandInput = document.getElementById('command-input');
    const executeBtn = document.getElementById('execute-btn');
    

    hero.style.top = '400px';
    hero.style.right = '1700px';

    executeBtn.addEventListener('click', executeCommand);

    function executeCommand() {
        const command = commandInput.value.trim().toLowerCase();

        switch (command) {
            case 'moveright':
                moveHero(-300, 0);
                break;
            case 'moveleft':
                moveHero(300, 0);
                break;
            case 'moveup':
                moveHero(0, -230);
                break;
            case 'movedown':
                moveHero(0, 230);
                break;
            default:
                alert('Comando inválido. Use "moveright", "moveleft", "moveup" ou "movedown".');
                break;
        }

        commandInput.value = '';
    }

    function moveHero(deltaX, deltaY) {
        const newRight = parseInt(hero.style.right || 0) + deltaX;
        const newTop = parseInt(hero.style.top || 0) + deltaY;

        hero.style.right = newRight + 'px';
        hero.style.top = newTop + 'px';
    }
});
