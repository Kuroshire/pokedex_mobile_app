import styled from "styled-components/native";

export const PokemonMorphology = ({weight, height} : {weight: number, height: number}) => {
  return(
    <MorphologyContainer>
      <MorphologyBlock title="Weight" data={weight}/>
      <MorphologyBlock title="Height" data={height}/>
    </MorphologyContainer>
  )
}

const MorphologyContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
`;

const MorphologyBlock = ({title, data} : {title: string, data: number}) => {
  return (
    <CardContainer>
      <CardHeader>
        <HeaderText>{title}</HeaderText>
      </CardHeader>
      <CardContent>
        <ValueText>{data}</ValueText>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  width: 150px;
  elevation: 4; /* ombre sur Android */
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  shadow-offset: 0px 2px;
  align-self: flex-start;
`;

const CardHeader = styled.View`
  background-color: #2980b9;
  padding: 12px;
`;

const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const CardContent = styled.View`
  padding: 16px;
  align-items: center;
`;

const ValueText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
`;