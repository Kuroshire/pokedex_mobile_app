import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { PokemonService } from "../modules/pokemon/application/pokemon.service";
import { PokemonWithNumber } from "../modules/pokemon/domain/pokemon";

type PokemonCardProps = {
  name: string,
  pokedexNumber: number,
  openModal: (pokemon: PokemonWithNumber) => void,
}

export const PokemonCard = ({ name, pokedexNumber, openModal } : PokemonCardProps) => {
  
  const onPress = async () => {
    const pokemonInfos = await PokemonService.GetPokemonWithName(name);
    if(pokemonInfos) {
      openModal({
        ...pokemonInfos, 
        pokedexNumber
      });
    } else {
      console.log(`${name} could not be found...`);
    }
  }

  return (
    <TouchableHighlight 
      underlayColor="transparent" 
      onPress={onPress}
    >
      <View style={styles.card}>
        <Text style={styles.text}>{ pokedexNumber } - { name }</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
    textTransform: "capitalize", // the pokemon name is capitalized through the styling because the name is also the id to fetch more data, and therefore case sensitive.
  },
});