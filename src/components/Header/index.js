import React, { useState, useEffect } from 'react';
import formatName from '../../services/FormatName';
import {
  PokemonImage,
  PokemonName,
  Container,
} from './style';
import TypeIcon from '../../components/TypeIcon';

function PokemonDetail({ route }) {
  const pokemonData = route.params;

  return (
    <Container>
      <PokemonImage source={{ uri: pokemonData.sprites.front_default }} />
      <PokemonName>{formatName(pokemonData.species.name)}</PokemonName>
      <TypeIcon types={pokemonData.types} />
    </Container>
  );
}

export default PokemonDetail;
