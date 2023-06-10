import React, { useState, useEffect } from 'react';
import formatName from '../../../services/FormatName';
import StatsDisplay from '../../../components/StatsDisplay';
import Axios from 'axios';
import PokemonIcon from '../../../components/PokemonIcon'
import { Text } from 'react-native'
import PokemonFlatList from '../../../components/PokemonFlatList'

import {
  Container,
} from './style';

function PokemonDetail({ route }) {
  const pokemonData = route.params;
  const [pokemonVariations, setPokemonVariations] = useState([]);
  const [pokemonForms, setPokemonForms] = useState([]);

  useEffect(() => {
    const fetchPokemonVariations = async () => {
      try {
        const responseVariations = await Axios.get(pokemonData.species.url);
        const dataVariations = responseVariations.data.varieties.map(variation => variation.pokemon);

        setPokemonForms(pokemonData.forms);
        setPokemonVariations(dataVariations);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemonVariations()
    console.log(pokemonVariations)
  }, [pokemonData])


  return (
    <>
      {pokemonData.stats.map((pokemonStats, index) => (
        <StatsDisplay key={index}
          label={formatName(pokemonStats.stat.name)}
          value={pokemonStats.base_stat} />
      ))}

      {pokemonVariations.length > 1 && (
        <PokemonFlatList pokemonList={pokemonVariations} />
      )}

    </>
  );
}

export default PokemonDetail;
