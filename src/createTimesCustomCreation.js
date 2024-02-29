export function createTimesCustomCreation () {
    const players = document.getElementById('players');

    function creatInputPlayers() {
        const quantityPlayers = players.value;

        for (let i = 0; i < quantityPlayers; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Digite o nome do jogador ${i + 1}`;
            input.name = `player${i + 1}`;
            input.required = true;
            players.appendChild(input);
        }
    }

    creatInputPlayers();
};