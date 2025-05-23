import { FetchingService } from "../../../services/fetchingService";
import { GetPokedexPortType } from "../application/getPokedex.query";
import { PokedexAPI, PokedexAPIToPokedexMapper } from "./pokedexAPI";

export const pokedexAPI = "https://pokeapi.co/api/v2/pokedex";

export const GetPokedexAdapter : GetPokedexPortType = async (pokedexIndex: number) => {
  const request = `${pokedexAPI}/${pokedexIndex}`;
  const pokedexData = await FetchingService.AxiosFetching<PokedexAPI>(request);

  if(pokedexData.success) {
    const pokedex = PokedexAPIToPokedexMapper(pokedexData.data);
    return pokedex;
  } else {
    return undefined;
  }

}
