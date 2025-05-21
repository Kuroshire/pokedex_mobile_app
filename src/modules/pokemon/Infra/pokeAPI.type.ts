// Note: this file is only partially representing the retrieved pokemon object from PokeAPI. 
// For now, those informations are all we need for the app, but we can add more information in the future if needed.

export type PokeAPIPokemon = {
  id: number,
  sprites: PokemonSprites,
  name: string,
  types: PokeAPIType[],
  height: number,
  weight: number,
}

type PokeAPIType = {
  slot: number,
  type: {
    name: string,
    url: string, // API Endpoint for this type access with PokeAPI.
  }
}

// All strings contains in this types are urls to the sprite image.
type PokemonSprites = {
  front_default: string,
  back_default: string,
  front_shiny: string,
  back_shiny: string,
}