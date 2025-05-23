import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HomePage } from './src/screens/home';
import { PokedexHeader } from './src/components/Header/pokedexHeader';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <PokedexHeader/>
      <StatusBar translucent />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
