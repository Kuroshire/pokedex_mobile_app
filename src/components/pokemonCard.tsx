import { View, Text, StyleSheet } from "react-native"

type PokemonCardProps = {
    name: string
}

export const PokemonCard = ({ name } : PokemonCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{ name }</Text>
        </View>
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
  },
});