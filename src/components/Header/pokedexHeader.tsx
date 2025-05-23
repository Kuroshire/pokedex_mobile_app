import { View, StyleSheet } from "react-native"
import { useEffect, useState } from "react";
import { SearchBar } from "./searchBar";

export const HEADER_HEIGHT = 70;
const STATUSBAR_HEIGHT = 50; 
export const TOTAL_HEADER_HEIGHT = HEADER_HEIGHT + STATUSBAR_HEIGHT;


export const PokedexHeader = () => {
  const [currentPokedex, setCurrentPokedex] = useState(0);

  useEffect(() => {
    //const fetchedPokedex = await PokedexService.GetPokedex(currentPokedex);
    console.log("new pokedex : " + currentPokedex);
    
  }, [setCurrentPokedex]);

  return (
    <View style={styles.header}>
      <View style={styles.slighlyLowerHeader}>
        <SearchBar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT + STATUSBAR_HEIGHT,
    width: '100%',
    backgroundColor: 'rgba(228, 66, 66, 0.94)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    position: 'absolute',
    top: 0,
    borderBottomWidth: 5,
    zIndex: 1000,
  },
  slighlyLowerHeader: {
    top: STATUSBAR_HEIGHT / 2,
  },
  pokedexSelectionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});