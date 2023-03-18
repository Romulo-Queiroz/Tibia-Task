var arquivoDetails = document.getElementById('arquive-details');
window.addEventListener('DOMContentLoaded', function () {
    getNews();
});
function getNews() {
    fetch('https://api.tibiadata.com/v3/news/archive/2')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var news = data.news;
        news.forEach(function (element) {
            arquivoDetails.innerHTML += "\n                    <h2>Data: ".concat(element.date, "</h2>\n                    <p>News: ").concat(element.news, "</p>\n                    <div><a target=\"_blank\" href=").concat(element.url, ">Continue lendo</a></div>\n                ");
        });
    })["catch"](function (error) { return console.log(error); });
}
