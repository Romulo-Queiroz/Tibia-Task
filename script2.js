
 let arquivedetails = document.getElementById('arquive-details')
 

function getnews(){ 
    fetch('https://api.tibiadata.com/v3/newsarchive')
.then(response => response.json())
.then(data => {
    recentNews.innerHTML= `
    
    <p>Date: ${data.newsarchive.date} </p>
    <p>Date: ${data.newsarchive.news} </p>
    
    `
    
    
})

}