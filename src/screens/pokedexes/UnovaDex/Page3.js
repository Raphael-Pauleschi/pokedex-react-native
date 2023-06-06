import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function UnovaDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=26&offset=545'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default UnovaDex;
