const pokedex = document.getElementById('pokedex');
const pokemonData = [];



const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1008`;
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
    
    const pokemonHTMLString = pokemon
        .map(
            (pokemon) => `
        <li class="card" onclick = "selectPokemon(${pokemon.id})">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const selectPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    displayPokemanPopup(pokemon);

    
  };
 
  


  const displayPokemanPopup = pokemon => {
    const type = pokemon.types.map((type) => type.type.name).join(", ");
    const image = pokemon.sprites ['front_default'];
    const htmlString = ` 
    <div class="popup"> 
    <button id="closeBtn" onclick="closePopup()">Close</button> 
    <div class="card"> 
    <img class="card-image" src="${image}"/> 
    <h2 class="card-title">${pokemon.id} </h2> 
    <small>Height:</small> ${pokemon.height} | 
    <small>Weight:</small> ${pokemon.weight}|
    <small>Type:</small> ${type}
    </div> 
    </div> 
    `;
    pokedex.innerHTML = htmlString + pokedex.innerHTML;
    console.log (htmlString);
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











