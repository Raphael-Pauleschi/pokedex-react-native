import React, { useState, useEffect } from 'react';
import {Text} from 'react-native'
import PokemonFlatList from '../../../components/PokemonFlatList'


function PokemonDetail({ route }) {
  const pokemonForms = route.params.forms;

  return (
      <PokemonFlatList pokemonList={pokemonForms} notALink/>
  );
}

export default PokemonDetail;
