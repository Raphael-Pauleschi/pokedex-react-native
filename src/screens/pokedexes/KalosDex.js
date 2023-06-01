import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../components/PokemonFlatList'
import PokemonList from '../../services/PokemonList'

function KalosDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default KalosDex;
