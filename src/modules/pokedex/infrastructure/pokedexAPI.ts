import { Pokedex } from "../domain/pokedex"

export type PokedexAPI = {
  descriptions: PokedexDescription[],
  name: string, // there is also a property names with language supported names, so maybe i'll switch if i find it useful.
  pokemon_entries: PokedexEntry[],

}

type PokedexDescription = {
  description: string,
  language: {
    name: string, // abbriviated, ie. french is written "fr"
    url: string, // references the language API.
  }
}

type PokedexEntry = {
  entry_number: number,
  pokemon_species: {
    name: string, //pokemon name in english
    url: string, // references the correct pokemon with the "pokemon-species" end point.
  }
}

export function PokedexAPIToPokedexMapper(pokedexAPI: PokedexAPI) {
  const pokedex : Pokedex = {
    name: pokedexAPI.name,
    description: pokedexAPI.descriptions[0].description,
    nbEntries: pokedexAPI.pokemon_entries.length,
    entries: pokedexAPI.pokemon_entries.map((pokemonEntry) => ({
      entryNumber: pokemonEntry.entry_number,
      name: pokemonEntry.pokemon_species.name,
    }))
  };

  return pokedex;
}