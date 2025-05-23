import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

type DropdownProps = {
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

export const DropdownMenu = ({ options, selectedValue, onValueChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const selectItem = (item: string) => {
    onValueChange(item);
    setIsOpen(false);
  };

  return (
    <View>

      <TouchableWithoutFeedback onPress={() => isOpen && setIsOpen(false)}>
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
            <Text style={styles.buttonText}>{selectedValue || 'Choose...'}</Text>
          </TouchableOpacity>

          {isOpen && (
            <View style={styles.dropdown}>
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => selectItem(item)} style={styles.item}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  button: {
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#999',
    marginTop: 4,
    borderRadius: 6,
    maxHeight: 150,
    backgroundColor: 'white',
    elevation: 5, // ombre android
    shadowColor: '#000', // ombre ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  lockAllScreen: {
    backgroundColor: 'hsla(0, 0.00%, 0.00%, 0.5)',
    flex: 1,
  }
});