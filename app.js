const apiKey = 'bb09c5c3d2b04d8681b42856b6866fe8';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

let arr = ["https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png","https://st2.depositphotos.com/2493575/5398/i/950/depositphotos_53989081-stock-photo-black-texture.jpg","https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png"]
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    for(let i =0; i<20; i++){
        if(data.articles[i].title != '[removed]'){
            if(data.articles[i].urlToImage == null){
                data.articles[i].urlToImage = arr[Math.floor(Math.random()*arr.length)]
            }
            if(data.articles[i].description == null){
                data.articles[i].description = "visit this link given here.."
            }
        document.getElementsByClassName("card_container")[0].innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap" style="width: 18rem;height: 10rem; border-radius:10px">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <h5><br></h5>
          <h7 style="margin:10px 0">${data.articles[i].publishedAt}</h7>
          <h5><br></h5>
          <p class="card-text">${data.articles[i].description}</p>
          <button style= "width:5rem; outline:none; color:blue"><a href="${data.articles[i].url}" style="text-decoration:none">Visit here</a></button>
        </div>
      </div>
      `
    }
}
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  