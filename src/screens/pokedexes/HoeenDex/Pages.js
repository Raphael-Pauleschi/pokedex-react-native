import * as React from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function Page1() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=28&offset=251'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page2() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=27&offset=279'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}
function Page3() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=26&offset=306'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page4() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=28&offset=332'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}
function Page5() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=26&offset=360'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

export { Page1, Page2, Page3, Page4, Page5 };
