import { create } from 'zustand';
import { PokedexList } from '../../modules/pokedex/pokedexList';

const defaultPokedexName = Object.keys(PokedexList)[0];

type PokedexStore = {
  currentPokedexName: string,
  setCurrentPokedexName: (pokedexName: string | undefined) => void,
}

export const usePokedexStore = create<PokedexStore>((set) => ({
  currentPokedexName: defaultPokedexName,
  setCurrentPokedexName: (pokedexName) => set({ currentPokedexName: pokedexName }),
}));
