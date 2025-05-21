export type Pokedex = {
  name: string,
  description: string,
  nbEntries: number,
  entries : PokedexEntry[];
}

export type PokedexEntry = {
  entryNumber: number,
  name: string,
  // url: string
}