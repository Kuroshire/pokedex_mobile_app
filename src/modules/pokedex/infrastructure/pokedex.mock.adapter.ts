import { GetPokedexPortType } from "../application/getPokedex.query";

export const GetPokedexFailedAfterLoading : GetPokedexPortType = async (_: number) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return undefined; // expected result when the API can't give an answer back. (for now)
}