function SearchFilter(){

const pokeData = [
    {
      id: 1,
      name: 'Pikachu'
    },
    {
      id: 2,
      name: 'Charmander'
    },
    {
      id: 3,
      name: 'Pichu'
    }
  ];
  
  const searchTerm = "pi";
  
  const filteredData = pokeData.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  console.log(filteredData);
}