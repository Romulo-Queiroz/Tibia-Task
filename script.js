let charName = document.getElementById('txtChar')
let charContainer = document.getElementById('show-info')
let btn = document.getElementById('btn')

// when press the button: //
btn.addEventListener('click', function () {
  document.getElementById('show-info').innerHTML = ''

  let ourRequest = new XMLHttpRequest()

  ourRequest.open(
    'GET',
    'https://api.tibiadata.com/v2/characters/' + charName.value + '.json'
  )

  ourRequest.onload = function () {
    let ourData = JSON.parse(ourRequest.responseText)

    let htmlString = ''
    htmlString += '<p> Name: ' + ourData.characters.data.name + '</p>'
    htmlString += '<p> Vocation: ' + ourData.characters.data.vocation + '</p>'
    htmlString += '<p> Level: ' + ourData.characters.data.level + '</p>'
    htmlString += '<p> World: ' + ourData.characters.data.world + '</p>'
    htmlString += '<p> Residence: ' + ourData.characters.data.residence + '</p>'
    htmlString +=
      '<p> Achievement Points: ' +
      ourData.characters.data.achievement_points +
      '</p>'
    htmlString +=
      '<p> Account status: ' + ourData.characters.data.account_status + '</p>'
    htmlString +=
      '<p> <strong> Status: </strong> ' +
      ourData.characters.data.status +
      '</p>'

    let otherChars = ourData.characters.other_characters

    for (i = 0; i < otherChars.length; i++) {
      htmlString +=
        '<p> Nome: ' +
        otherChars[i].name +
        ' - <strong> Status: </strong>' +
        otherChars[i].status +
        '</p>'
    }

    charContainer.insertAdjacentHTML('beforeend', htmlString)

    console.log(otherChars[0].name)
  }

  ourRequest.send()
})