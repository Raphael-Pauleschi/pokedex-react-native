import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function Page1() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=24&offset=649'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

function Page2() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=24&offset=673'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

function Page3() {
  const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=24&offset=697'
      )

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export {Page1,Page2,Page3};
