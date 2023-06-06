import * as React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function SinnohDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=26&offset=467'
      )

  return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default SinnohDex;
