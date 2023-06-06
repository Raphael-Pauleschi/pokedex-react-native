import React, { useState, useEffect } from 'react';
import PokemonFlatList from '../../../components/PokemonFlatList'
import PokemonList from '../../../services/PokemonList'

function Page1() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=25&offset=493'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page2() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=27&offset=518'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page3() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=26&offset=545'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page4() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=25&offset=571'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page5() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=27&offset=596'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}

function Page6() {
    const pokemonList = PokemonList(
        'https://pokeapi.co/api/v2/pokemon?limit=26&offset=623'
    )

    return (
        <PokemonFlatList pokemonList={pokemonList} />
    );
}
export { Page1, Page2, Page3, Page4, Page5, Page6 };
