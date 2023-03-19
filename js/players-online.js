var playersDetails = document.getElementById("players-online");
function getPlayersOnline() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.tibiadata.com/v3/worlds', true);
    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var playersOnline = data.worlds.players_online;
            playersDetails.innerHTML = "\n                <span>Players Online:</span>\n                <p> ".concat(playersOnline, " </p>\n            ");
        }
        else {
            console.error('Failed to retrieve player data.');
        }
    };
    request.send();
}
getPlayersOnline();
