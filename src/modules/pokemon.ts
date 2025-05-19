export type Pokemon = {
    name: string, 
    type: string[],
    weight: number,
    height: number,
}

export function CreatePokemon(pokemonInfos : Partial<Pokemon>) {
    const newPokemon: Pokemon = {
        name: "",
        type: [],
        weight: 0,
        height: 0,
        ...pokemonInfos
    };

    return newPokemon;
}