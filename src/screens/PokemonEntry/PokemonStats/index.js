import React, { useState, useEffect } from 'react';
import formatName from '../../../services/FormatName';
import StatsDisplay from '../../../components/StatsDisplay';
import Axios from 'axios';
import  PokemonIcon  from '../../../components/PokemonIcon'
import { Image } from 'react-native'

import {
  Container,
} from './style';

function PokemonDetail({ route }) {
  const pokemonData = route.params;
  const [pokemonForms, setPokemonForms] = useState([]);

  useEffect(() => {
    const fetchPokemonForms = async () => {
      try {
        const response = await Axios.get(pokemonData.species.url);
        const data = response.data.varieties;
        setPokemonForms(data)

      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemonForms()
  }, [pokemonData])


  return (
    <Container>
      {pokemonData.stats.map((pokemonStats, index) => (
        <StatsDisplay key={index} label={formatName(pokemonStats.stat.name)} value={pokemonStats.base_stat} />
      ))}

    {pokemonForms.map((form, index) => (
        <PokemonIcon key={index} url={form.pokemon.url} />
      ))}
    </Container>
  );
}

export default PokemonDetail;
