import React, { useState, useEffect } from 'react';
import formatName from '../../../services/FormatName';
import StatsDisplay from '../../../components/StatsDisplay';
import {
  Container,
} from './style';

function PokemonDetail({ route }) {
  const pokemonData = route.params;

  return (
    <Container>
      {pokemonData.stats.map((pokemonStats, index) => (
        <StatsDisplay key={index} label={formatName(pokemonStats.stat.name)} value={pokemonStats.base_stat} />
      ))}
  
     
    </Container>
  );
}

export default PokemonDetail;
