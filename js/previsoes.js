async function getMonsters() {
    const {data} = await axios.get('https://api.simacheck.com/server/lore/Ombra')
    const loyal_panters = data['Loyal Partners']
    const Midnight = loyal_panters[2]
    console.log(Midnight)
    const draptorchance = document.getElementById('Draptor-chance')
    draptorchance.innerText = `${Midnight.current_prob *100}%`

    const draptor_last_view = document.getElementById('Draptor-Last-view')
    draptor_last_view.innerText = moment(Midnight.last_view,'YYYY-MM-DD').from(moment().startOf('day'))

    const Status = document.getElementsByClassName('status-monsters')
   
    if (Midnight.current_prob == 0) {
        document.querySelector('.status-monsters').style.backgroundColor = 'red';
    }
    else{
        document.querySelector('.status-monsters').style.backgroundColor = 'green'; 
    }
}
getMonsters();