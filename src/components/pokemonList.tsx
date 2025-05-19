import { View } from "react-native"
import { PokemonCard } from "./pokemonCard"
import { Pokemon } from "../modules/pokemon"

type PokemonListProps = {
    pokemonList: Pokemon[]
}

export const PokemonList = ({ pokemonList } : PokemonListProps) => {
  return (
    <View>
      {
        pokemonList.map((pokemon, index) => 
          <PokemonCard key={index} name={pokemon.name}/>
        )
      }
    </View>
  )
}