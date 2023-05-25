const pokedex = document.getElementById('pokedex');
const pokemonData = [];

// let point_de_vie;
// let attaque ;
// let defense; 
// let special_attaque;
// let special_defense; 
// let vitesse; 
// let precision; 
// let evasion; 

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1010`;
    const res = await fetch(url);
    const data = await res.json();
    pokemon = data.results.map((result, index) => ({
      ...result,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`,
    }));
    displayPokemon(pokemon);
  };

const displayPokemon = (pokemon) => {
    
    pokemon.map(async (pok) => { 
      let li = document.createElement("li")
      let image = document.createElement ("img") 
      image.className = "card-image"
      li.className = "card"
      let h2 = document.createElement("h2")
      h2.className = "card-title"
    
      image.src = pok.image
      h2.innerHTML = pok.id + "." + pok.name
      li.append(image)
      li.append(h2)
      li.addEventListener('click', (e) => {
        e.preventDefault()
        selectPokemon(pok.id)
      })
      pokedex.append(li)
    });
};

const selectPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    displayPokemanPopup(pokemon);
    pokemonChart(pokemon)

    
  };
 
  


  const displayPokemanPopup = pokemon => {
    const type = pokemon.types.map((type) => type.type.name).join(", ");
    const image = pokemon.sprites ['front_default'];
    let div = document.createElement('div')
    let button = document.createElement('button')
    let div2 = document.createElement('div')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let small = document.createElement('small')
    let small2 = document.createElement('small')
    let small3 = document.createElement('small')
    div.className = 'popup';
    button.id = 'closeBtn'
    button.innerHTML = 'Close'
    button.addEventListener('click' , () => {
      closePopup()
    })
    div2.className = 'card'
    img.className = 'card-image'
    img.src = image
    h2.className = 'card-title'
    h2.innerHTML = pokemon.id;
    small.innerHTML = 'Height:'
    small.innerHTML = 'Weight:'
    small.innerHTML = 'Type:'
    div2.append(img)
    div2.append(small)
    div2.append(pokemon.height)
    div2.append(small2)
    div2.append(pokemon.weight)
    div2.append(small3)
    div2.append(type)
    div.append(button)
    div.append(div2)
    pokedex.append(div)
  };

  const closePopup = () => {
    const popup = document.querySelector ('.popup');
    popup.parentElement.removeChild (popup);
  }


fetchPokemon();

var searchdiv = document.getElementById("search-bar");
var pokemonDetails = document.getElementById("pokemonDetails");

searchdiv.addEventListener("input", function() {
  var searchTerm = searchdiv.value.toLowerCase();
  if (searchTerm.trim() === "") {
    pokemonDetails.innerHTML = "";
    return;
  }
  let pokemonFiltered = pokemon.filter(pok => pok.name.toLowerCase().includes(searchTerm))
  displayPokemon(pokemonFiltered)
});

function displayPokemonDetails(pokemon) {
  pokemonDetails.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Numéro : ${pokemon.id}</p>
    <p>Type(s) : ${pokemon.types.map(type => type.type.name).join(", ")}</p>
  `;
}

// var adresses = [
//   {
//     url: "https://www.example.com",
//     limite: 10
//   },
//   {
//     url: "https://www.example2.com",
//     limite: 5
//   },
//   {
//     url: "https://www.example3.com",
//     limite: 20
//   }
// ];

// // Accéder aux éléments du tableau
// console.log(adresses[0].url);      // Affiche "https://www.example.com"
// console.log(adresses[1].limite);










// var myChart = document.getElementById("myChart");

// var myData = {
//   labels: ["point_de_vie", "attaque", "defense", "special_attaque", "special_defense", "vitesse"],
//   datasets: [{
//     label: "Student A",
//     backgroundColor: "rgba(200,0,0,0.2)",
//     data: [35, 55, 40, 50, 50, 90],
//   }, {
//     label: "Student B",
//     backgroundColor: "rgba(0,0,200,0.2)",
//     data: [54, 65, 60, 70, 70, 75]
//   }]
// };

// var radarChart = new Chart(marksCanvas, {
//   type: 'radar',
//   data: myChart
// });





