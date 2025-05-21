import { PokeAPIPokemon } from "../Infra/pokeAPI.type";

export type Pokemon = {
  name: string,
  pokedexNumber: number,
  types: string[],
  weight: number,
  height: number,
}

export function CreatePokemon(pokemonInfos : Partial<Pokemon>): Pokemon {
  const newPokemon: Pokemon = {
    name: "",
    pokedexNumber: 0,
    types: [],
    weight: 0,
    height: 0,
    ...pokemonInfos
  };

  return newPokemon;
}

// Mapper used once the data is fetched from API to clean it up.
export function PokemonDataToPokemonMapper(pokemonData : PokeAPIPokemon): Pokemon {
  const newPokemon: Pokemon = {
    name: pokemonData.name,
    pokedexNumber: pokemonData.id,
    types: pokemonData.types.map((pokemonTypeObject) => pokemonTypeObject.type.name),
    height: pokemonData.height,
    weight: pokemonData.weight,
  };

  return newPokemon;
}