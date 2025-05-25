import { FlatList, Modal, Text, TouchableHighlight, TouchableWithoutFeedback, View, StyleSheet } from "react-native"
import styled from "styled-components/native";
import { PokedexList } from "../../../modules/pokedex/pokedexList";

type ChoosePokedexModalProps = {
  isVisible: boolean,
  onClose: (selectedPokedex?: string) => void,
}

export const ChoosePokedexModal = ({isVisible, onClose} : ChoosePokedexModalProps) => {

  const closeWithoutChanging = () => onClose();

  const dataList = Object.keys(PokedexList);
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={closeWithoutChanging}>
      <TouchableWithoutFeedback onPress={closeWithoutChanging}>
        <ModalBackground>
          <TouchableWithoutFeedback onPress={() => { }}>
            <ModalContainer>
              <FlatList 
                data={dataList}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <TouchableHighlight 
                    underlayColor="transparent"
                    onPress={() => onClose(item)}
                  >
                    <PokedexChoice>
                      
                      <Text>{item}</Text> 
                    </PokedexChoice>
                  </TouchableHighlight>
                )}
              >
                
              </FlatList>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </ModalBackground>

      </TouchableWithoutFeedback>
    </Modal>
  )
}

const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  height: 500px;
  width: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 24px;
`;

const PokedexChoice = styled.View`
  background-color: #f2f2f2;
  padding: 16px;
  border-radius: 12px;
  marginBottom: 5px;
  text-align: center;
`;
