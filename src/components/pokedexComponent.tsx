import { View, Text } from "react-native";
import { PokemonList } from "./pokemonList";
import { Pokedex, PokedexEntry } from "../modules/pokedex/pokedex";
import { useState, useEffect } from "react";
import { GetPokedex } from "../modules/pokedex/pokedex.service";

type PokedexProps = {
	pokedexIndex: number,
}

export function PokedexComponent({ pokedexIndex } : PokedexProps) {
	
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadPokedex = async () => {
      try {
        const pokedexData = await GetPokedex(pokedexIndex);
        setPokedex(pokedexData);
      } catch(error) {
        console.log("something bad append somewhere...");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadPokedex();
  }, []);

  if(loading) {
		return <Text>Chargement...</Text>
	} 

	if(!pokedex) {
		return <Text>Pokedex not found...</Text>
	}

	const entries: PokedexEntry[] = pokedex.entries;

	return (
		<View>
			<PokemonList pokemonList={entries} />
		</View>
	)
}