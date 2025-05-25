import { View, Text, TouchableHighlight, StyleSheet } from "react-native"

type ErrorComponentProps = {
  errorText: string,
  Reload: () => void,
}

export const ErrorComponent = ({errorText, Reload} : ErrorComponentProps) => {
  return (
    <View>
      <Text>{errorText}</Text>
      <TouchableHighlight style={styles.buttonStyle} onPress={Reload}>
        <Text style={styles.buttonText}>Reload</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
  }
})