import { PokeAPIPokemon } from "../Infra/pokeAPI.type";

//to use as default sprite if needed.
const pokemonSpriteTemplate = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";

export type Pokemon = {
  name: string,
  sprites : {
    frontDefault: string,
    backDefault: string,
    frontShiny: string,
    backShiny: string,
  },
  types: string[],
  weight: number,
  height: number,
}

export type PokemonWithNumber = Pokemon & {pokedexNumber: number}

// Mapper used once the data is fetched from API to clean it up.
export function PokemonDataToPokemonMapper(pokemonData : PokeAPIPokemon): Pokemon {
  const newPokemon: Pokemon = {
    name: pokemonData.name,
    sprites : {
      frontDefault: pokemonData.sprites.front_default,
      backDefault: pokemonData.sprites.back_default,
      frontShiny: pokemonData.sprites.front_shiny,
      backShiny: pokemonData.sprites.back_shiny,
    },
    types: pokemonData.types.map((pokemonTypeObject) => pokemonTypeObject.type.name),
    height: pokemonData.height,
    weight: pokemonData.weight,
  };

  return newPokemon;
}