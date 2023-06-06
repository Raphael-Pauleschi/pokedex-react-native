import * as React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function Page1() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=22&offset=721'
    )
    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}
function Page2() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=23&offset=743'
    )
    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page3() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=22&offset=766'
    )
    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page4() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=21&offset=788'
    )
    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

export { Page1, Page2, Page3, Page4 };
