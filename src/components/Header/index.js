import React, { useState, useEffect } from 'react';
import formatName from '../../services/textFormat/FormatName';
import {
  PokemonImage,
  PokemonName,
  Container,
  ImageWrapper
} from './style';
import TypeIcon from '../../components/TypeIcon';

function PokemonDetail({ route }) {
  const pokemonData = route.params;

  return (
    <Container>
      <ImageWrapper>
      <PokemonImage source={{ uri: pokemonData.sprites.front_default }} />
      { pokemonData.sprites.front_shiny &&
        <PokemonImage source={{ uri: pokemonData.sprites.front_shiny }} />}
     </ImageWrapper>
      <PokemonName>{formatName(pokemonData.name)}</PokemonName>
      <TypeIcon types={pokemonData.types} />
    </Container>
  );
}

export default PokemonDetail;
