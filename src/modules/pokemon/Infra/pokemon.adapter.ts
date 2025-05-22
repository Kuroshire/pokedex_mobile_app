import { FetchingService } from "../../../utils/fetchingService";
import { Pokemon, PokemonDataToPokemonMapper } from "../domain/pokemon";
import { PokeAPIPokemon } from "../Infra/pokeAPI.type";

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

export const GetPokemonWithNameAdapter = async (name: string) => {
  const apiPath = `${pokemonAPI}/${name.toLowerCase()}`;

  const pokemonData = await FetchingService.AxiosFetching<PokeAPIPokemon>(apiPath);
  if(pokemonData.success) {
    const pokemon = PokemonDataToPokemonMapper(pokemonData.data);
    return pokemon;
  } else {
    return undefined;
  }
}

// currently unused...
export const GetPokemonWithId = async (id: number) => {
  const apiPath = `${pokemonAPI}/${id}`;

  const pokemonData = await FetchingService.AxiosFetching<PokeAPIPokemon>(apiPath);
  if(pokemonData.success) {
    const pokemon = PokemonDataToPokemonMapper(pokemonData.data);
    return pokemon;
  } else {
    return undefined;
  }
}
