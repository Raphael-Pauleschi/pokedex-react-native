import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../components/PokemonFlatList'
import PokemonList from '../../services/PokemonList'

function KantoDex() {
  const pokemonList = PokemonList('https://pokeapi.co/api/v2/pokemon?limit=151')

  return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default KantoDex;