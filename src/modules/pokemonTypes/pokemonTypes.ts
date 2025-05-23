// I don't really know how to extract colors from types in the API since the color object doesn't have a color referenced in the API.
const colours: Record<string, string> = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
  unknown: '#383736',

};

// Alpha must be in hex value.
export function GetColorFromType({
  typeName,
  alpha = 'FF'
} : {
  typeName: string,
  alpha: string
}) {
  if(typeName in colours) {
    return `${colours[typeName]}${alpha}`;
  } else {
    return `${colours.unknown}${alpha}`
  }
}
