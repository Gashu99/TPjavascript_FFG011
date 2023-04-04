const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w200";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Récupérer les données de l'API
fetch(APIURL)
  .then(response => response.json())
  .then(data => {
    // Parcourir les données et afficher les affiches de film
    data.results.forEach(movie => {
      const img = document.createElement('img');
      const t=document.createElement('h3')
    
      img.src = IMGPATH + movie.poster_path;
      img.title=movie.title
      t.textContent=movie.title
      const conteneur=document.createElement('div')
      conteneur.appendChild(img)
      conteneur.appendChild(t)
      document.querySelector('#lefilm').appendChild(conteneur);
     

    });
  }
  )
  .catch(error => console.error(error));


  