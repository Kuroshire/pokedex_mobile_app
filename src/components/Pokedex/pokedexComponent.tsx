import { View } from "react-native";
import { Pokedex } from "../../modules/pokedex/domain/pokedex";
import { useState, useEffect, useCallback } from "react";
import { PokedexService } from "../../modules/pokedex/application/pokedex.service";
import { PokemonList } from "./pokemonList";
import { LoadingComponent } from "../Problem Display/loadingComponent";
import { ErrorComponent } from "../Problem Display/errorComponent";
import { usePokedexStore } from "../../services/stores/usePokedexStore";
import { PokedexList } from "../../modules/pokedex/pokedexList";

type PokedexProps = {
	pokedexIndex: number,
}

export function PokedexComponent() {
  const currentPokedexName = usePokedexStore((state) => state.currentPokedexName);
  
  
  const [pokedex, setPokedex] = useState<Pokedex>();
  const [loading, setLoading] = useState(true);
  
  //note: as this function is a useCallbakc, it doesn't change after the first load, hence currentPokedexName will be considered the same value every run.
  //to fix this issue, we need to pass the pokedexName as an argument.
  const LoadPokedex = useCallback( async (pokedexName: string) => {
    const pokedexIndex = PokedexList[pokedexName];

    // console.log("Pokedex Name: " + currentPokedexName);
    // console.log('loading pokemon list from index : ' + pokedexIndex);

    if(!pokedexIndex) {
      setPokedex(undefined);
      setLoading(false);
      return;
    }

    const pokedexData = await PokedexService.GetPokedex(pokedexIndex);        
    setPokedex(pokedexData);
    setLoading(false);
  }, []);

  useEffect(() => {    
    LoadPokedex(currentPokedexName);
  }, [LoadPokedex, currentPokedexName]);

  if(loading) {
		return <LoadingComponent />
	} 

	if(!pokedex) {
    const Reload = () => {
      // console.log("reloading...");
      LoadPokedex(currentPokedexName);
    }
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