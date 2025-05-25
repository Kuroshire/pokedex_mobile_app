import { useState } from "react"
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { ChoosePokedexModal } from "./choosePokedexModal";
import { usePokedexStore } from "../../../services/stores/usePokedexStore";

export const ChoosePokedex = () => {
  const usePokedex = usePokedexStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OnModalClose = (selectedPokedex?: string) => {
    if(selectedPokedex) {
      console.log('updating pokedex: ' + selectedPokedex);
      
      usePokedex.setCurrentPokedexName(selectedPokedex);
    }

    setIsModalOpen(false);
  }

  return (
    <View>
      <TouchableHighlight 
        underlayColor="transparent" 
        onPress={() => setIsModalOpen(true)}
      >
        <Text style={styles.choosePokedex}>{usePokedex.currentPokedexName}</Text>
      </TouchableHighlight>
      <ChoosePokedexModal 
        isVisible={isModalOpen}
        onClose={OnModalClose} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  choosePokedex: {
    height: 50,
    width: 130,
    fontSize: 35,
    fontStyle: 'italic',
    right: 0,
    writingDirection: 'rtl',
    textAlign: 'right',
  }
});
