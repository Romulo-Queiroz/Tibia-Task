var monsterDetails = document.getElementById('monster-details');
function getmonster(name) {
    fetch("https://api.tibiadata.com/v3/creature/".concat(name))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (monsterDetails) {
            monsterDetails.innerHTML = "\n          <img src=\"".concat(data.creature.image_url, "\"/>\n          <h5>Nome: ").concat(data.creature.name, "</h5>\n          <p>Behaviour: ").concat(data.creature.behaviour, "</p>\n          <h5>Hitpoints: ").concat(data.creature.hitpoints, "</h5>\n          <p>Description: ").concat(data.creature.description, "</p>\n          <h5>Weakness: ").concat(data.creature.weakness, "</h5>\n        ");
            console.log("funcão getmonster executada com sucesso");
        }
    })["catch"](function (error) {
        console.error(error);
    });
}
var submitButton = document.getElementById('btn');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("botão clicado");
    var monsterName = document.getElementById('txtChar').value;
    getmonster(monsterName);
});
