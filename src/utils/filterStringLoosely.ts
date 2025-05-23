export function FilterStringLoosely(filterString: string, data: string): boolean {
  const characterList = filterString.split('');
  let dataCharacters = data.split('');
  return characterList.every((character) => {
    const foundChar = dataCharacters.findIndex((dataChar) => dataChar == character);
    if(foundChar === -1) { // case you arrived at the end of the data string but still haven't finished the filterString
      return false;
    }
    dataCharacters = dataCharacters.slice(foundChar);
    return true;
  });
}

export function FilterStringsIdentical(filterString: string, data: string ) {
    return data.toLowerCase().includes(filterString.toLowerCase());

}