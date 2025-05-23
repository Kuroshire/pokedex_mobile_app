import { View, StyleSheet } from "react-native"
import { PokedexComponent } from "../components/pokedexComponent";
import { TOTAL_HEADER_HEIGHT } from "../components/pokedexHeader";


export const HomePage = () => {
  
  return (
    <View style={styles.container}>
      <PokedexComponent pokedexIndex={1}/>
    </View>
  )
}

const CONTAINER_PADDING = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CONTAINER_PADDING,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: TOTAL_HEADER_HEIGHT - CONTAINER_PADDING,
  },
});