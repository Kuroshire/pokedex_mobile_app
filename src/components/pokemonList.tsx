import { FlatList, View } from "react-native"
import { PokemonCard } from "./pokemonCard"
import { PokedexEntry } from "../modules/pokedex/pokedex"

type PokemonListProps = {
  pokemonList: PokedexEntry[]
}

export const PokemonList = ({ pokemonList } : PokemonListProps) => {

  return (
    <FlatList
      data={pokemonList} 
      keyExtractor={ (pokemon) => pokemon.entryNumber.toString() }
      renderItem={ ({item}) => (
        <View>
          <PokemonCard name={item.name} pokedexNumber={item.entryNumber}/> 
        </View>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ 
        paddingBottom: 50,
        paddingTop: 50,
      }}
    />
      // {
      //   pokemonList.map((pokemon, index) => 
      //     <PokemonCard key={index} name={pokemon.name} pokedexNumber={pokemon.entryNumber}/>
      //   )
      // }
  )
}