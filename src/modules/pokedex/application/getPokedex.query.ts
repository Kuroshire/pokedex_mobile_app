import { Pokedex } from "../domain/pokedex"
import { GetPokedexAdapter } from "../infrastructure/pokedex.adapter"

export type GetPokedexPortType = (pokedexIndex: number) => Promise<Pokedex | undefined>

export const GetPokedexPort: GetPokedexPortType = (pokedexIndex: number) => {
  const pokedexData = GetPokedexAdapter(pokedexIndex);

  return pokedexData;
}