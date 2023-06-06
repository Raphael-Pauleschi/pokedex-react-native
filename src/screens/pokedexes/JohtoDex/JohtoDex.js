import React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function JohtoDex() {
   const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151'
      );
      

   return (
    <PokemonFlatList pokemonList={pokemonList}/>
  );
}

export default JohtoDex;