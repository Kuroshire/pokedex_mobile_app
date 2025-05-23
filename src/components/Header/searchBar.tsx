import { TextInput, View, StyleSheet } from "react-native"
import { useSearchStore } from "../../services/useSearchStore";

export const SearchBar = () => {
  const SearchStore = useSearchStore();
  
  return (
    <View>
      <TextInput 
        value={SearchStore.searchedName}
        style={styles.searchBar}
        placeholder="Pokemon Name"
        keyboardType="web-search"
        onChangeText={SearchStore.setSearchedname}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    // backgroundColor: 'rgba(170, 170, 170, 0.29)',
    // borderRadius: 12,
    width: 150,
    fontStyle: 'italic',
    borderBottomWidth: 2,
    paddingBottom: 5,
  }
})