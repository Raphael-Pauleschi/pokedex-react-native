import * as React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function AlolaDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=22&offset=787'
      )
 return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default AlolaDex;
