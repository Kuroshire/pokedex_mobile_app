import { AxiosFetching } from "../../../utils/axiosFetch";
import { Pokemon, PokemonDataToPokemonMapper } from "../domain/pokemon";
import { PokeAPIPokemon } from "../Infra/pokeAPI.type";

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

export const GetPokemonWithNameAdapter = async (name: string) => {
  const apiPath = `${pokemonAPI}/${name.toLowerCase()}`;

  const pokemonData: PokeAPIPokemon = await AxiosFetching(apiPath);
  const pokemon : Pokemon = PokemonDataToPokemonMapper(pokemonData);

  return pokemon;
}

export const GetPokemonWithId = async (id: number) => {
  const apiPath = `${pokemonAPI}/${id}`;

  const pokemonData = await AxiosFetching(apiPath);
  const pokemon = PokemonDataToPokemonMapper(pokemonData);

  return pokemon;
}
