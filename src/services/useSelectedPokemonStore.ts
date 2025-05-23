// import { create } from 'zustand'
// import { PokedexEntry } from '../modules/pokedex/domain/pokedex';
// import { usePokedexStore } from './usePokedexStore';

// type PokemonSelectedStore = {
//   selectedPokemon: PokedexEntry | undefined,
//   setSelectedPokemonWithPokedexNumber: (pokedexNumber: number) => void,
// }

// export const useSelectedPokemonStore = create<PokemonSelectedStore>((set) => ({
//   selectedPokemon: undefined,
//   setSelectedPokemonWithPokedexNumber: (pokedexNumber) => set({selectedPokemon: usePokedexStore().pokedex?.find((pokemon) => pokemon.entryNumber == pokedexNumber)}),
// }));
