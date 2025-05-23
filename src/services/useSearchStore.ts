import { create } from 'zustand'

type SearchStore = {
  searchedName: string
  setSearchedname: (value: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchedName: '',
  setSearchedname: (value) => set({searchedName: value})
}));