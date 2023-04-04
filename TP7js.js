const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w200";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Récupérer les données de l'API
fetch(APIURL)
  .then(response => response.json())
  .then(data => {console.log(data.results)
    // Parcourir les données et afficher les affiches de film
    data.results.forEach(movie => {
      const img = document.createElement('img');
      const t=document.createElement('h3')
      const over=document.createElement('p')
      t.className='mytitre'
    
      img.src = IMGPATH + movie.poster_path;
      img.title=movie.title
      img.vote_average=movie.vote_average
      over.textContent=movie.overview
     

      t.textContent=movie.title +"  "+ movie.vote_average
      const conteneur=document.createElement('div')
      conteneur.appendChild(img)
      conteneur.appendChild(t)
      img.addEventListener('mouseover',()=>{
        over.style.display='block'

      })
      img.addEventListener('mouseout',()=>{
        over.style.display='none'

      })
      
      
      document.querySelector('#lefilm').appendChild(conteneur);
      
     

    });
  }
  )
  .catch(error => console.error(error));


  