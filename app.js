const URL = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"

var count = 0; // depart du tableau array 0 
function start() { // recup api
  axios
    .get(URL)
    .then((res) => {

      console.log(res.data);
      liste(res.data);
    })
    .catch((err) => console.error(err));
}
// function qui recup les infos du tableau 
function liste(quotes) {
  
  const article = document.getElementById("image") // on insere info dans l'article

  article.innerHTML = `<p>${quotes[count].quote}</p>
  <h2>${quotes[count].character}</h2>
  <img src="${quotes[count].image}">`;

  count = Math.floor(Math.random() * 9) //afficher image + cara+ texte random 
  console.log((Math.floor(Math.random() * 10)))

}

//chaque click il est un nouveau personnage qui apparait et remplace l'autre 
//jusqu'a revenir dessus

document.getElementById("btn").onclick = start;