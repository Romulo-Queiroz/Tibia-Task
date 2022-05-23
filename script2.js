
 let arquivedetails = document.getElementById('arquive-details')
 window.addEventListener('DOMContentLoaded',() => getnews())

function getnews(){ 
    fetch('https://api.tibiadata.com/v3/news/archive/2')
.then(response => response.json())
.then(data => {
    const news = data.news;
    news.forEach(element => {
        arquivedetails.innerHTML += `
        
         <h2>Date: ${element.date} </h2>
         <p>News: ${element.news} </p>
         
         <div><a target="_blank" href=${element.url}>Cotinue lendo</a></div> 

        
        `
    });

    
    

})

}


