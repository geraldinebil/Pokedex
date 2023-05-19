const pokedex = document.getElementById('pokedex');

var container = document.body.querySelector("#app");
var pokemonToFetch = 151;
var searchBar = document.body.querySelector("#search-bar");
var searchBtn = document.body.querySelector("#submit-btn");
var anchorSearch = document.body.querySelector("#searchClick");
var newPokeImg = function (pokeID) {
    var src = "https://pokeres.bastionbot.org/images/pokemon/" + pokeID + ".png";
    return src;
};

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

var mySearchStuff = function () {
    var inputStr = "";
    searchBar.addEventListener("keyup", function (e) {
        e.preventDefault();
        inputStr = e.target.value;
    });
}
var promiseArr = [];
    for (var i = 1; i <= pokemonToFetch; i++) {
        var url = "https://pokeapi.co/api/v2/pokemon/" + i;
        promiseArr.push(fetch(url).then(function (data) { return data.json(); }));
    }
    Promise.all(promiseArr).then(function (data) {
        var pokemon = data
            .map(function (poke) { return ({
            name: poke.name.slice(0, 1).toUpperCase().concat(poke.name.slice(1).toLowerCase()),
            id: poke.id,
            height: poke.height,
            weight: poke.weight
        }); });
        searchBtn.addEventListener("click", function () {
            var names = pokemon.map(function (val) { return val.name; });
            for (var i = 0; i <= pokemonToFetch; i++) {
                if (inputStr === names[i]) {
                    anchorSearch.href = "#" + names[i];
                }
            }
            if (inputStr === "") {
                anchorSearch.href = "#";
            }
        });
    });
mySearchStuff();