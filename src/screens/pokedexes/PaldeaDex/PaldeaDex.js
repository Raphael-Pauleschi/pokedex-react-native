import React from 'react';
import PokemonList from '../../../services/PokemonList';
import PokemonFlatList from '../../../components/PokemonFlatList'

function PaldeaDex() {
  const pokemonList = PokemonList('https://pokeapi.co/api/v2/pokemon?limit=105&offset=905');

  return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}


export default PaldeaDex;
