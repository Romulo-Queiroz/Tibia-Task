
let playersdetails = document.getElementById('players-online')
window.addEventListener('DOMContentLoaded', () => getonline())

const online = [];

function getonline() {
    fetch('https://api.tibiadata.com/v3/worlds')
        .then(response => response.json())
        .then(data => {
            const totalPlayersOn = data?.worlds.players_online
            document.getElementById('players-online').innerHTML = `  
           <label>Players Online:</label>
            <p> ${totalPlayersOn} </p>          
            `
        })
}