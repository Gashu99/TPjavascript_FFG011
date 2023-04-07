const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w300";
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
      over.className='overview'
      t.className='mytitre'
    
      img.src = IMGPATH + movie.poster_path
      img.title=movie.title
      img.vote_average=movie.vote_average
      over.textContent=movie.overview
     

      t.textContent=movie.title +"  "+ movie.vote_average
      const conteneur=document.createElement('div')
      conteneur.className='conteneur'
      conteneur.appendChild(img)
      conteneur.appendChild(t)
     
      const info = document.createElement('div')
      info.className='info'
      info.appendChild(over)
      conteneur.appendChild(info)
      info.style.display='none'

      img.addEventListener('mouseover',()=>{
        info.style.display='block'
      
        
       
      })
      img.addEventListener('mouseout',()=>{
        info.style.display='none'

      })
      


      
      // RECHERCHER UN FILM PAR SON NOM COMPLET
     document.querySelector('#lefilm').appendChild(conteneur);
    const bouton=document.getElementById('rechercher')
    bouton.addEventListener('click',()=>{
    const valeur=document.getElementById('marecherche')
    const contenu=valeur.value
    if (contenu==movie.title){
      document.querySelector('#lefilm').style.display='none'
      document.body.appendChild(conteneur)
    }
   

    })

    //RECHERCHE D'UN FILM des qu'il tape le commencement
    const valeur=document.getElementById('marecherche')
    valeur.addEventListener('input',function(){
      const arechercher=valeur.value
      
     const filmaafficher = data.results.filter(function(film){
      return film.title.toLowerCase().includes(arechercher.toLowerCase())
     })

     document.querySelector('#lefilm').innerHTML=""

     filmaafficher.forEach(function(movie){
      const img = document.createElement('img');
      const t=document.createElement('h3')
      const over=document.createElement('p')
      over.className='overview'
      t.className='mytitre'
    
      img.src = IMGPATH + movie.poster_path
      img.title=movie.title
      img.vote_average=movie.vote_average
      over.textContent=movie.overview
     

      t.textContent=movie.title +"  "+ movie.vote_average
      const conteneur=document.createElement('div')
      conteneur.className='conteneur'
      conteneur.appendChild(img)
      conteneur.appendChild(t)
      document.querySelector('#lefilm').appendChild(conteneur)
     })
  
      })
    

    });
  }
  )
  .catch(error => console.error(error));





  