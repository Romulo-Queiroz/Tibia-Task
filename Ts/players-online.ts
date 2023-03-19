const playersDetails: HTMLElement = document.getElementById("players-online")!;

function getPlayersOnline(): void {
    const request: XMLHttpRequest = new XMLHttpRequest();
    request.open('GET', 'https://api.tibiadata.com/v3/worlds', true);
    request.onload = function() {
        if (request.status === 200) {
            const data: { worlds: { players_online: number } } = JSON.parse(request.responseText);
            const playersOnline: number = data.worlds.players_online;
            playersDetails.innerHTML = `
                <span>Players Online:</span>
                <p> ${playersOnline} </p>
            `;
        } else {
            console.error('Failed to retrieve player data.');
        }
    };
    request.send();
}

getPlayersOnline();
