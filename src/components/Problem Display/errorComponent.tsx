import { View, Text, TouchableHighlight } from "react-native"

type ErrorComponentProps = {
  errorText: string,
  Reload: () => void,
}

export const ErrorComponent = ({errorText, Reload} : ErrorComponentProps) => {
  return (
    <View>
      <Text>{errorText}</Text>
      <TouchableHighlight onPress={Reload}>Reload</TouchableHighlight>
    </View>
  )
}