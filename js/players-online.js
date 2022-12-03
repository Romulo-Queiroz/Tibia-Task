let playersDetails = document.getElementById("players-online");

 async function getPlayersOnline() {
    const response = await fetch("https://api.tibiadata.com/v3/worlds")
    const { worlds:{players_online}} = await response.json()
    playersDetails.innerHTML = `  
    <span>Players Online:</span>
     <p> ${players_online} </p> `;
}
getPlayersOnline();
