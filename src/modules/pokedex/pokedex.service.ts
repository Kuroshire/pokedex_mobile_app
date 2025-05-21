import { AxiosFetching } from "../../utils/axiosFetch";
import { PokedexAPI, PokedexAPIToPokedexMapper } from "./pokedexAPI";

const pokedexAPI = "https://pokeapi.co/api/v2/pokedex";

export async function GetPokedex(pokedexIndex: number) {
  const request = `${pokedexAPI}/${pokedexIndex}`;

  const pokedexData: PokedexAPI = await AxiosFetching(request);
  const pokedex = PokedexAPIToPokedexMapper(pokedexData);

  return pokedex;
}