import { View, Text, StyleSheet } from "react-native"
import { PokedexComponent } from "../components/pokedexComponent";

export const HomePage = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> This is the Home Page !</Text>
      <PokedexComponent pokedexIndex={2}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});