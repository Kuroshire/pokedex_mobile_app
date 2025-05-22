import { View, Text, TouchableHighlight } from "react-native";
import { PokemonList } from "./pokemonList";
import { Pokedex, PokedexEntry } from "../modules/pokedex/domain/pokedex";
import { useState, useEffect } from "react";
import { PokedexService } from "../modules/pokedex/application/pokedex.service";

type PokedexProps = {
	pokedexIndex: number,
}

export function PokedexComponent({ pokedexIndex } : PokedexProps) {
	
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [loading, setLoading] = useState(true);

  const Reload = () => {

  }

  useEffect(() => {
    const loadPokedex = async () => {
      try {
        const pokedexData = await PokedexService.GetPokedex(pokedexIndex);        
        setPokedex(pokedexData);
      } catch(error) {
        console.log("something bad append somewhere...");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadPokedex();
  }, [Reload]);

  if(loading) {
		return <Text>Chargement...</Text>
	} 

	if(!pokedex) {
		return (
      <View>
        <Text>Pokedex not found...</Text>
        <TouchableHighlight onPress={Reload}>Reload</TouchableHighlight>
      </View>
    )
	}

	const entries: PokedexEntry[] = pokedex.entries;

	return (
		<View>
			<PokemonList pokemonList={entries} />
		</View>
	)
}