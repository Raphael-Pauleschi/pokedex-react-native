import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../components/PokemonFlatList'
import PokemonList from '../../services/PokemonList'

function HoeenDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default HoeenDex;
