let world = 'Antica';

let input = document.querySelector('#input');
let button = document.getElementById('btn');
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value === '') {
    alert('Digite um mundo');
    return;
  }
  world = input.value;

  innerBoss();
});

async function getBoss(type) {
  const { data } = await axios.get(
    `https://api.simacheck.com/server/lore/${world}`
  );
  return data[type];
}

function drawBossIten({ current_prob, image_url, boss, last_view }) {
  const color = current_prob === 0 ? 'red' : 'green';
  const lastView = moment(last_view, 'YYYY-MM-DD').from(
    moment().startOf('day')
  );
  const porcentage = (current_prob * 100).toFixed(2);
  return `
     <tr id="details-table">
        <td class="${color}" title="Quando a cor estiver vermelho a probabilidade é baixa. Com a probailidade alta fica verde">
        <img src="${image_url}" alt="Draptor"></td>
        <td>${boss}</td>
        <td>${porcentage}%</td>
        <td>${lastView}</td>
    </tr>`;
}

function loader() {
  const tBody = document.querySelector('#tBody');
  const p = document.createElement('p');
  p.innerText = '';
  p.className = 'loader';
  tBody.appendChild(p);
  return p;
}

async function innerBoss() {
  loader();
  const tBody = document.querySelector('#tBody');

  let tableContent = '';
  tableContent += 'Loyal Partners';
  const loyalPartners = await getBoss('Loyal Partners');
  loyalPartners.forEach((loyalBoss) => {
    tableContent += drawBossIten(loyalBoss);
  });

  tableContent += 'Vampire Lords';
  const vampireLords = await getBoss('Vampire Lords');
  vampireLords.forEach((vampireBoss) => {
    tableContent += drawBossIten(vampireBoss);
  });

  tBody.innerHTML = tableContent;
}

innerBoss();
