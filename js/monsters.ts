let monsterDetails:HTMLElement | null = document.getElementById('monster-details');

function getmonster(name) {
  fetch(`https://api.tibiadata.com/v3/creature/${name}`)
    .then((response) => response.json())
    .then((data) => {
      if (monsterDetails){
        monsterDetails.innerHTML = `
    <img src="${data.creature.image_url}"/>
    <h5>Nome: ${data.creature.name}</h5>
    <p>Behaviour: ${data.creature.behaviour}</p>
    <h5>Hitpoints: ${data.creature.hitpoints}</h5>
    <p>Description: ${data.creature.description}</p>
    <h5>Weakness: ${data.creature.weakness}</h5>

    `;
    }   
  });
}

let form = document.getElementById('form') as HTMLFormElement;

let charName = document.getElementById('txtChar') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let charName = document.getElementById('char-name') as HTMLInputElement;
  let nomeMonster: string = charName.value;
  getmonster(nomeMonster);
});
