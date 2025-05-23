import { View } from "react-native";
import { Pokedex } from "../../modules/pokedex/domain/pokedex";
import { useState, useEffect } from "react";
import { PokedexService } from "../../modules/pokedex/application/pokedex.service";
import { PokemonList } from "./pokemonList";
import { LoadingComponent } from "../Problem Display/loadingComponent";
import { ErrorComponent } from "../Problem Display/errorComponent";

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
		return <LoadingComponent />
	} 

	if(!pokedex) {
		return (
      <ErrorComponent errorText="Failed to load pokedex..." Reload={Reload}/>
    )
	}

	return (
		<View>
			<PokemonList pokemonList={pokedex.entries} />
		</View>
	)
}