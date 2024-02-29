export function createTimesCustomCreation () {
    const createTimesCustomButton = document.getElementById('createTimesCustomButton');

    function getPlayersData() {
        const playerInputs = document.querySelectorAll('.listInputPlayers input.playerName');
        const levelInputs = document.querySelectorAll('.listInputPlayers input.playerLevel');
        
        const playersData = [];
        playerInputs.forEach((input, index) => {
            const playerName = input.value.trim();
            const playerLevel = parseInt(levelInputs[index].value);
            if (playerName && !isNaN(playerLevel)) {
                playersData.push({ name: playerName, level: playerLevel });
            }
        });
        return playersData;
    }

    function divideIntoTeams(players) {
        const sortedPlayers = players.sort((a, b) => b.level - a.level);
        
        const team1 = [];
        const team2 = [];
        let team1TotalLevel = 0;
        let team2TotalLevel = 0;
        
        sortedPlayers.forEach((player, index) => {
            if (team1.length < 5 && (index % 2 === 0 || index === 0)) {
                if (team1TotalLevel <= team2TotalLevel) {
                    team1.push(player);
                    team1TotalLevel += player.level;
                } else {
                    team2.push(player);
                    team2TotalLevel += player.level;
                }
            } else {
                if (team2.length < 5 && (index % 2 !== 0 || index === 1)) {
                    if (team1TotalLevel <= team2TotalLevel) {
                        team1.push(player);
                        team1TotalLevel += player.level;
                    } else {
                        team2.push(player);
                        team2TotalLevel += player.level;
                    }
                }
            }
        });
        
        return [team1, team2];
    }

    function displayTeams(teams) {
        const resultContent = document.querySelector('.nextContent');
        resultContent.innerHTML = '';

        teams.forEach((team, index) => {
            const teamElement = document.createElement('li');
            teamElement.innerHTML = 
            `   
                <div data-aos="zoom-out">
                    <strong>Time ${index + 1}</strong>
                    <br/>
                    ${team.map(player => player.name).join(', ')}
                </div>
            `;
            resultContent.appendChild(teamElement);
        });
    }

    function drawLots() {
        createTimesCustomButton.addEventListener('click', function() {
            const playersData = getPlayersData();
            if (playersData.length < 8) {
                alert('Insira pelo menos dois jogadores para definir times!');
                return;
            }
            const teams = divideIntoTeams(playersData);
            displayTeams(teams);
        });
    }

    drawLots();
}
