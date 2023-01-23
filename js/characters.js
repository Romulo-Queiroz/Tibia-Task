window.addEventListener('DOMContentLoaded', (name) => {
  let playersInfo = document.getElementById('show-info');

  function innerOtherCharacters(characters) {
    let list = ``;
    characters.forEach((character) => {
      list += `<li>${character.name}</li>`;
    });

    return `
   <ul class='othersCharacetrs'>
     ${list}.
   </ul>
 `;
  }

  function getplayer(name) {
    fetch(`https://api.tibiadata.com/v3/character/${name}`)
      .then((response) => response.json())
      .then((data) => {
        playersInfo.innerHTML = `
    <p>Name: ${data.characters.character.name}</p>
    <p>Sex: ${data.characters.character.sex}</p>
    <p>Vocation: ${data.characters.character.vocation}</p>
    <p>Level: ${data.characters.character.level}</p>
    <p>Archivement Points: ${data.characters.character.achievement_points}</p>
    <p>World: ${data.characters.character.world}</p>
    <p>Residence: ${data.characters.character.residence}</p>
    <p>Account Status: ${data.characters.character.account_status}</p>
    <p class= "tittleOthers">Other characters:</p>${innerOtherCharacters(
      data.characters.other_characters
    )}
    `;
      });
  }

  let form = document.getElementById('form');

  let nome = document.getElementById('txtChar');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomePlayer = nome.value;
    getplayer(nomePlayer);
  });
});

// deleted : false
// main : false
// name : "string"
// status : "string"
// traded : false
// world : "string"
