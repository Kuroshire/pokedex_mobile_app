import { Modal, TouchableWithoutFeedback } from "react-native";
import { PokemonWithNumber } from "../../modules/pokemon/domain/pokemon";
import { PokemonSprites } from "./pokemonSprite";
import styled from "styled-components/native";
import { GetColorFromType } from "../../modules/pokemonTypes/pokemonTypes";
import { CapitalizeName } from "../../utils/capitalizeName";
import { PokemonTypeLabel } from "./pokemonTypeLabel";
import { PokemonMorphology } from "./pokemonMorphology";
import { CloseButton } from "./closeButton";
import { HEADER_HEIGHT } from "../Header/pokedexHeader";

type PokemonInfosModalProps = {
  isVisible: boolean,
  pokemon: PokemonWithNumber | undefined,
  onClose: () => void,
}

export const PokemonInfosModal = ({isVisible, pokemon, onClose} : PokemonInfosModalProps) => {
  
  if(!pokemon) {
    return (<></>);
  }

  const DisplayNumberWithZeros = (pokedexNumber: number) => {
    return ("00" + pokedexNumber).slice (-3);
  }

  return (
    <Modal 
      visible={isVisible}
      transparent
      animationType="slide" 
      onRequestClose={onClose}
      >
      <TouchableWithoutFeedback onPress={onClose}>
        <ModalBackground pokemonType={pokemon.types[0]}>
          <CloseButton onClose={onClose}/>
          <TouchableWithoutFeedback onPress={() => { }}>
            <ModalContainer>
              <Title>N° : {DisplayNumberWithZeros(pokemon.pokedexNumber)} { CapitalizeName(pokemon.name) }</Title>
              <PokemonSprites sprites={pokemon.sprites} />
              <PokemonTypeLabel pokemonTypes={pokemon.types} />
              <PokemonMorphology weight={pokemon.weight} height={pokemon.height} />
            </ModalContainer>
          </TouchableWithoutFeedback>

        </ModalBackground>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const ModalBackground = styled.View`
  flex: 1;
  background-color: ${(props: { pokemonType: string; }) => GetColorFromType({typeName: props.pokemonType, alpha: "CC"})};
  top: ${HEADER_HEIGHT}px;
  justify-content: flex-end;
`;

const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  min-height: 80%;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;