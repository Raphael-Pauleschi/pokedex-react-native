import * as React from 'react';
import PokemonFlatList from '../../components/PokemonFlatList';
import PokemonListService from '../../services/requisitions/PokemonList'

function PokedexList({pokemonList}) {
   const pokemonGet = PokemonListService(pokemonList)

 
    return (
        <PokemonFlatList pokemonList={pokemonGet} />
    );
}


export default PokedexList;
