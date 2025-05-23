import { FlatList, View } from "react-native"
import { PokemonCard } from "./pokemonCard"
import { PokedexEntry } from "../../modules/pokedex/domain/pokedex"
import { useState } from "react"
import { PokemonInfosModal } from "../Modal/pokemonInfosModal"
import { PokemonWithNumber } from "../../modules/pokemon/domain/pokemon"
import { useSearchStore } from "../../services/useSearchStore"
import { FilterStringLoosely } from "../../utils/filterStringLoosely"

type PokemonListProps = {
  pokemonList: PokedexEntry[]
}

export const PokemonList = ({ pokemonList } : PokemonListProps) => {

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonWithNumber | undefined>();
  
  const OpenModal = (pokemon: PokemonWithNumber) => {
    setSelectedPokemon(pokemon);
  }

  //#region Pokemon Search
  const searchedPokemon = useSearchStore((state) => state.searchedName);

  const filterPokemonList = pokemonList.filter((pokemon) => 
    FilterStringLoosely(searchedPokemon.toLowerCase(), pokemon.name.toLowerCase())
  );
  //#endregion

  return (
    <View>
      <FlatList
        data={filterPokemonList} 
        keyExtractor={ (pokemon) => pokemon.entryNumber.toString() }
        renderItem={ ({item}) => (
          <View>
            <PokemonCard name={item.name} pokedexNumber={item.entryNumber} openModal={OpenModal}/> 
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingBottom: 50,
          paddingTop: 50,
        }}
      />
      <PokemonInfosModal isVisible={selectedPokemon != undefined} pokemon={selectedPokemon} onClose={() => setSelectedPokemon(undefined)}/>
    </View>
  )
}