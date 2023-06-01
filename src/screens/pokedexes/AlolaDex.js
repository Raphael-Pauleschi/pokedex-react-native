import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../components/PokemonFlatList'
import PokemonList from '../../services/PokemonList'

function AlolaDex() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721'
      )
 return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default AlolaDex;
