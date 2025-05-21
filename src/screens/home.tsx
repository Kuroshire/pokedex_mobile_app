import { View, Text, StyleSheet } from "react-native"
import { PokedexComponent } from "../components/pokedexComponent";

export const HomePage = () => {
  const pokemonNameList = [
    "Tiplouf", "Prinplouf", "Pingoléon", 
    "Ouistikram", "Chimpenfeu", "Simiabraze", 
    "Tortipouss", "Boskara", "Torterra", 
    // "Etourmi", "Etourvol", "Etouraptor",
    // "Keunotor", "Castorno",
    // "Krikzik", "Melokrik"
  ]; // no scroll behaviour for now...

  return (
    <View style={styles.container}>
      <Text style={styles.title}> This is the Home Page !</Text>
      <PokedexComponent />
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