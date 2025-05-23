import styled from "styled-components/native";
import { GetColorFromType } from "../../modules/pokemonTypes/pokemonTypes";

export const PokemonTypeLabel = ({pokemonTypes} : {pokemonTypes: string[]}) => {
  return (
    <TypesContainer>
      {
        pokemonTypes.map((pokemonType, index) => 
          <TypeLabel key={index} pokemonType={pokemonType}>{pokemonType.toUpperCase()}</TypeLabel>
        )
      }
    </TypesContainer>
  )
}


const TypeLabel = styled.Text`
  background-color: ${(props: { pokemonType: string; }) => GetColorFromType({typeName: props.pokemonType, alpha: "FF"})};
  padding: 10px 16px;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
  align-self: flex-start;
`;

const TypesContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;