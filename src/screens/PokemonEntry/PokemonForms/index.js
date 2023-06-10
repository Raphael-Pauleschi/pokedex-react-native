import * as React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'


function PokemonForms({ route }) {
  const pokemonForms = route.params.forms;

  return (
      <PokemonFlatList pokemonList={pokemonForms} notALink/>
  );
}

export default PokemonForms;
