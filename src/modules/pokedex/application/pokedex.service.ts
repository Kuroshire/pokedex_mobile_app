import { GetPokedexPort, GetPokedexPortType } from "./getPokedex.query";

type PokedexServiceType = {
  GetPokedex: GetPokedexPortType,
}

export const PokedexService: PokedexServiceType = {
  GetPokedex: GetPokedexPort,
}