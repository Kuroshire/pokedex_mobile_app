import { View } from "react-native";
import { Pokedex } from "../../modules/pokedex/domain/pokedex";
import { useState, useEffect, useCallback } from "react";
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

  //doesn't need a try catch because error management is handled within FetchService. If an error happens, you will receive undefined instead.
  const LoadPokedex = useCallback( async () => {
    const pokedexData = await PokedexService.GetPokedex(pokedexIndex);        
    setPokedex(pokedexData);

    setLoading(false);
  }, []);

  useEffect(() => {
    LoadPokedex();
  }, [LoadPokedex]);

  if(loading) {
		return <LoadingComponent />
	} 

	if(!pokedex) {
    const Reload = () => {
      console.log("reloading...");
      LoadPokedex();
    }
		return (
      <ErrorComponent errorText="Failed to load pokedex..." Reload={Reload}/>
    )
	}

	return (
		<View>
			<PokemonList pokemonList={pokedex?.entries} />
		</View>
	)
}