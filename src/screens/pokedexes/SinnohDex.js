import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../components/PokemonFlatList'
import PokemonList from '../../services/PokemonList'

function SinnohDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386'
      )

  return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default SinnohDex;
