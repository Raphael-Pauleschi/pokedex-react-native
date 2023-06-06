import React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function Page1() {
  const pokemonList = PokemonList(
    'https://pokeapi.co/api/v2/pokemon?limit=25&offset=151'
  );


  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

function Page2() {
  const pokemonList = PokemonList(
    'https://pokeapi.co/api/v2/pokemon?limit=25&offset=176'
  );


  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

function Page3() {
  const pokemonList = PokemonList(
    'https://pokeapi.co/api/v2/pokemon?limit=25&offset=201'
  );


  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

function Page4() {
  const pokemonList = PokemonList(
    'https://pokeapi.co/api/v2/pokemon?limit=25&offset=226'
  );


  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

export { Page1, Page2, Page3, Page4 };