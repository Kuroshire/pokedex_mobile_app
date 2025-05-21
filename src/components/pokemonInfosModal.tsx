import { Modal, View, Text, Image } from "react-native";
import { Pokemon, PokemonWithNumber } from "../modules/pokemon/domain/pokemon";
import { PokemonSprites } from "./pokemonSprite";

type PokemonInfosModalProps = {
  visible: boolean,
  onClose: () => void,
  pokemon: PokemonWithNumber | undefined,
}

export const PokemonInfosModal = ({pokemon, visible, onClose} : PokemonInfosModalProps) => {
  if(!pokemon) {
    return (<Text>This shouldn't be open...</Text>);
  }

  const TypeDisplay = (types: string[]) => {
    return types.join(' ');
  }

  return (
    <View>
      <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
        <PokemonSprites sprites={pokemon.sprites}/>
        <Text>Name : { pokemon.name }</Text>
        <Text>Pokedex n° : { pokemon.pokedexNumber }</Text>
        <Text>Types { TypeDisplay(pokemon.types) }</Text>
        <Text>Weight : { pokemon.weight }</Text>
        <Text>Height : { pokemon.height }</Text>
      </Modal>
    </View>
  );
}