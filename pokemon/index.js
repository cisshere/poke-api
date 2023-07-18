const input = document.querySelector("#input-number");
const button = document.querySelector(".btn-agregar");

const getPoliwrath = async (pokemonElejido) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonElejido}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const contenedor = document.querySelector(".contenedor");

const templatePokemon = (pokemon) => {
  const { name, sprites, types } = pokemon;
  const pokemonHTML = `
        <div class="card">
            <img src="${sprites.other.home.front_default}" alt="${name}">
            <h2>${name}</h2>
            <p>${types[0].type.name}</p>
        </div>
    `;
  contenedor.innerHTML = pokemonHTML;
};

const renderPokemon = async (pokemonElejido) => {
  try {
    const pokemonElejido = input.value.trim();
    const pokemon = await getPoliwrath(pokemonElejido);
    templatePokemon(pokemon);
  } catch (error) {
    console.error(error);
  }
};

button.addEventListener("click", renderPokemon);
