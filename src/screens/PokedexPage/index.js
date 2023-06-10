import * as React from 'react';
import PokemonFlatList from '../../components/PokemonFlatList';
import PokemonListService from '../../services/PokemonList'
import {View,Text} from 'react-native'

function PokedexList({pokemonList}) {
   const pokemonGet = PokemonListService(pokemonList)

 
    return (
        <PokemonFlatList pokemonList={pokemonGet} />
    );
}


export default PokedexList;
