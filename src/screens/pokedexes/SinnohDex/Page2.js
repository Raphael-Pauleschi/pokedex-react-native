import * as React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function SinnohDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=27&offset=413'
      )

  return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default SinnohDex;
