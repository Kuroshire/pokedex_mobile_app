import { GetPokemonWithNamePortType, GetPokemonWithNamePort } from "./getPokemonWithName.query"

type PokemonServiceType = {
  GetPokemonWithName: GetPokemonWithNamePortType,
}

export const PokemonService : PokemonServiceType = {
  GetPokemonWithName : GetPokemonWithNamePort,
}
