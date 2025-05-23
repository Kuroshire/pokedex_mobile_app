import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Pokemon } from "../../modules/pokemon/domain/pokemon";
import { useMemo, useState } from "react";

type PokemonSpritesProps = {
  sprites: Pokemon['sprites'],
  // onPressPreviousPokemon: () => Promise<void>, 
  // onPressNextPokemon: () => Promise<void>,
}

//sadly double entry switch doesn't exist in typescript... so i have to use an enum instead of have 2 boolean which could make things less boilerplaty...
enum SpritePosture {
  FrontDefault,
  BackDefault,
  FrontShiny,
  BackShiny,
}

export const PokemonSprites = ( { sprites } : PokemonSpritesProps) => {

  const [currentSprite, setCurrentSprite] = useState(SpritePosture.FrontDefault);

  //required when using Image, otherwise assigning getSpriteFromPosture directly into the uri property will make the image reload each frame.
  const imageSource = useMemo(() => getSpriteFromPosture(), [currentSprite]);

  //#region Handling Sprite Posture Enum
  function getSpriteFromPosture() {
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
        {/* <TouchableOpacity style={styles.arrowButton} onPress={() => { }}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={toggleFrontBack}>
          <Image 
            source={{ uri: imageSource}}
            style={{ width: 100, height: 100 }}
            />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.arrowButton} onPress={() => { }}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} onPress={setDefault}>
          <Text style={styles.buttonText}>Default</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={setShiny}>
          <Text style={styles.buttonText}>✨</Text>
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
    borderRadius: 25,
    backgroundColor: "#2e86de",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }
});