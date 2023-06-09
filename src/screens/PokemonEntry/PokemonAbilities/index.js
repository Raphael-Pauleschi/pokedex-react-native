import React, { useState, useEffect } from 'react';
import axios from 'axios';
import formatName from '../../../services/FormatName';
import StatsDisplay from '../../../components/StatsDisplay';
import {
  PokemonImage,
  PokemonName,
  DexEntryWrapper,
  DexEntryGame,
  DexEntryText,
  Container,
  DexEntryGameContainer,
  DexEntryTextContainer,
} from './style';
import TypeIcon from '../../../components/TypeIcon';

function PokemonDetail({ route }) {
  const pokemonData = route.params;
  const [pokemonEntries, setPokemonEntries] = useState([]);
  useEffect(() => {
    const fetchPokemonEntries = async () => {
      try {
        const response = await axios.get(pokemonData.species.url);
        const data = response.data;
        const englishEntries = data.flavor_text_entries.filter(
          (entry) => entry.language.name === 'en'
        );

        setPokemonEntries(englishEntries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonEntries();
  }, [pokemonData]);

  return (
    <Container>

{pokemonData.abilities.map((textEntry, index) => (
        <DexEntryWrapper key={index}>
          <DexEntryGameContainer>
            <DexEntryGame>{formatName(textEntry.ability.name)}</DexEntryGame>
          </DexEntryGameContainer>
          <DexEntryTextContainer>
            <DexEntryText>Sou um teste eu faço coisas</DexEntryText>
          </DexEntryTextContainer>
        </DexEntryWrapper>
      ))}
    </Container>
  );
}

export default PokemonDetail;
