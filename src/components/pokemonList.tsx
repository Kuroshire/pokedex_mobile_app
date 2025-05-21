import { FlatList, View } from "react-native"
import { PokemonCard } from "./pokemonCard"
import { PokedexEntry } from "../modules/pokedex/pokedex"
import { useState } from "react"
import { PokemonInfosModal } from "./pokemonInfosModal"
import { Pokemon, PokemonWithNumber } from "../modules/pokemon/domain/pokemon"

type PokemonListProps = {
  pokemonList: PokedexEntry[]
}

export const PokemonList = ({ pokemonList } : PokemonListProps) => {

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonWithNumber | undefined>();
  
  const OpenModal = (pokemon: Pokemon, pokedexNumber: number) => {
    setSelectedPokemon({
      ...pokemon, 
      pokedexNumber
    });
  }

  return (
    <View>
      <FlatList
        data={pokemonList} 
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
      <PokemonInfosModal visible={selectedPokemon != undefined} onClose={() => setSelectedPokemon(undefined)} pokemon={selectedPokemon} />
    </View>
  )
}