import { Pokemon } from "../domain/pokemon"
import { GetPokemonWithNameAdapter } from "../Infra/pokemon.adapter"

export type GetPokemonWithNamePortType = (pokemonName: string) => Promise<Pokemon | undefined>

export const GetPokemonWithNamePort: GetPokemonWithNamePortType = async (pokemonName: string) => {
  const pokemon = await GetPokemonWithNameAdapter(pokemonName);

  return pokemon;
}