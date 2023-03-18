
const form = document.getElementById('form') as HTMLFormElement;
const nome = document.getElementById('txtChar') as HTMLInputElement;
const playersInfo = document.getElementById('show-info') as HTMLElement;

function innerOtherCharacters(characters: any[]) {
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

function getPlayer(name: string) {
  fetch(`https://api.tibiadata.com/v3/character/${name}`)
    .then((response) => response.json())
    .then((data: any) => {
      playersInfo.innerHTML = `
        <p>Name: ${data.characters.character.name}</p>
        <p>Sex: ${data.characters.character.sex}</p>
        <p>Vocation: ${data.characters.character.vocation}</p>
        <p>Level: ${data.characters.character.level}</p>
        <p>Archivement Points: ${data.characters.character.achievement_points}</p>
        <p>World: ${data.characters.character.world}</p>
        <p>Created: ${data.characters.account_information.created}</p>
        <p>Residence: ${data.characters.character.residence}</p>
        <p>Account Status: ${data.characters.character.account_status}</p>
        <p class= "tittleOthers">Other characters:</p>${innerOtherCharacters(
          data.characters.other_characters
        )}
      `;
    });
}

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const nomePlayer = nome.value;
  getPlayer(nomePlayer);
});
