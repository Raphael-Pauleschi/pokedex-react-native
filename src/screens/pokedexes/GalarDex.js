import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../components/PokemonFlatList'
import PokemonList from '../../services/PokemonList'

function GalarDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default GalarDex;
