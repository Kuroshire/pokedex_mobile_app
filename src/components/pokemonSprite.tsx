import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Pokemon } from "../modules/pokemon/domain/pokemon";
import { useState } from "react";

type PokemonSpritesProps = {
  sprites: Pokemon['sprites']
}

//sadly double entry switch doesn't exist in typescript, so i have to use an enum instead of have 2 boolean which could make things less boilerplaty...
enum SpritePosture {
  FrontDefault,
  BackDefault,
  FrontShiny,
  BackShiny,
}

export const PokemonSprites = ( { sprites } : PokemonSpritesProps) => {

  const [currentSprite, setCurrentSprite] = useState(SpritePosture.FrontDefault);

  //#region Handling Sprite Posture Enum
  const getSpriteFromPosture = () => {
    console.log(currentSprite);

    switch(currentSprite) {
      case SpritePosture.BackShiny:
        return sprites.backShiny;

      case SpritePosture.FrontShiny:
        return sprites.frontShiny;
      
      case SpritePosture.BackDefault:
        return sprites.backDefault;
      
      case SpritePosture.FrontDefault:
        return sprites.frontDefault;
    }
  }

  const toggleFrontBack = () => {
    switch (currentSprite) {
      case SpritePosture.FrontDefault:
        setCurrentSprite(SpritePosture.BackDefault);
        break;

      case SpritePosture.BackDefault:
        setCurrentSprite(SpritePosture.FrontDefault);
        break;

      case SpritePosture.FrontShiny:
        setCurrentSprite(SpritePosture.BackShiny);
        break;

      case SpritePosture.BackShiny:
        setCurrentSprite(SpritePosture.FrontShiny);
        break;
    }
  }

  const setDefault = () => {
    switch(currentSprite) {
      case SpritePosture.FrontShiny:
        setCurrentSprite(SpritePosture.FrontDefault);
        break;

      case SpritePosture.BackShiny:
        setCurrentSprite(SpritePosture.BackDefault);
        break;
    }
  }

  const setShiny = () => {
    switch(currentSprite) {
      case SpritePosture.FrontDefault:
        setCurrentSprite(SpritePosture.FrontShiny);
        break;

      case SpritePosture.BackDefault:
        setCurrentSprite(SpritePosture.BackShiny);
        break;
    }
  }

  //#endregion

  return (
    <View style={styles.container}>

      <View style={styles.imageRow}>
        <TouchableOpacity style={styles.arrowButton} onPress={toggleFrontBack}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>

        <Image 
          source={{ uri: getSpriteFromPosture()}}
          style={{ width: 100, height: 100 }}
          />

        <TouchableOpacity style={styles.arrowButton} onPress={toggleFrontBack}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} onPress={setDefault}>
          <Text style={styles.buttonText}>Default</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={setShiny}>
          <Text style={styles.buttonText}>Shiny</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  imageRow : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 40,
    color: "grey",
    fontWeight: "bold",
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    padding: 12,
    backgroundColor: "#2e86de",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }
});