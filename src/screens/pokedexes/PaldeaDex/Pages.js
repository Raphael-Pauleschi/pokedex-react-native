import React from 'react';
import PokemonList from '../../../services/PokemonList';
import PokemonFlatList from '../../../components/PokemonFlatList'

function Page1() {
  const pokemonList = PokemonList('https://pokeapi.co/api/v2/pokemon?limit=26&offset=905');

  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

function Page2() {
  const pokemonList = PokemonList('https://pokeapi.co/api/v2/pokemon?limit=25&offset=931');

  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

function Page3() {
  const pokemonList = PokemonList('https://pokeapi.co/api/v2/pokemon?limit=26&offset=956');

  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

function Page4() {
  const pokemonList = PokemonList('https://pokeapi.co/api/v2/pokemon?limit=27&offset=983');

  return (
    <PokemonFlatList pokemonList={pokemonList} />
  );
}

export { Page1, Page2, Page3, Page4 };
