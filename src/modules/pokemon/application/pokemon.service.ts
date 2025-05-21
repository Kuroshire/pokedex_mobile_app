import { AxiosFetching } from "../axiosFetch";
import { CreatePokemon, Pokemon } from "../domain/pokemon";
import { PokeAPIPokemon } from "../Infra/pokeAPI.type";

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

export const GetPokemonWithName = async (name: string) => {
  const apiPath = `${pokemonAPI}/${name.toLowerCase()}`;

  const pokemonData: PokeAPIPokemon = await AxiosFetching(apiPath);

  const pokemon : Pokemon = CreatePokemon({
    name: pokemonData.name,
    pokedexNumber: pokemonData.id,
    types: pokemonData.types.map((pokemonTypeObject) => pokemonTypeObject.type.name),
    height: pokemonData.height,
    weight: pokemonData.weight,
  })

  console.log(pokemon);
}

export const GetPokemonWithPokedexNumber = async (pokedexNumber: string) => {
  const apiPath = `${pokemonAPI}/${pokedexNumber}`;

  const pokemonData = await AxiosFetching(apiPath);

  const pokemon = {
    name: pokemonData.name,
    pokedexNumber: pokemonData.id,
    types: pokemonData.types.map((pokemonTypeObject: { type: { name: string; }; }) => pokemonTypeObject.type.name),
    height: pokemonData.height,
    weight: pokemonData.weight,
  } 
  
  console.log(pokemon);
}
