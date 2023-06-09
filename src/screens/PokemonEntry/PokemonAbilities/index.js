import React, { useState, useEffect } from 'react';
import axios from 'axios';
import formatName from '../../../services/FormatName';
import {
  DexEntryWrapper,
  DexEntryGame,
  DexEntryText,
  Container,
  DexEntryGameContainer,
  DexEntryTextContainer,
} from './style';


function PokemonDetail({ route }) {
  const pokemonData = route.params;
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  useEffect(() => {
    const fetchPokemonAbilities = async () => {
      try {
        const abilityDetails = await Promise.all(
          pokemonData.abilities.map(async (ability) => {
            const response = await axios.get(ability.ability.url);
            const englishEntry = response.data.effect_entries.find(
              (entry) => entry.language.name === 'en'
            );
            return { name: ability.ability.name, effect: englishEntry.effect };
          })
        );

        setPokemonAbilities(abilityDetails);
      } catch (error) {
        console.error('Error fetching Pokemon abilities:', error);
      }
    };

    fetchPokemonAbilities();
  }, [pokemonData]);

  return (
    <Container>
      {pokemonAbilities.map((ability, index) => (
        <DexEntryWrapper key={index}>
          <DexEntryGameContainer>
            <DexEntryGame>{formatName(ability.name)}</DexEntryGame>
          </DexEntryGameContainer>
          <DexEntryTextContainer>
            <DexEntryText>{ability.effect}</DexEntryText>
          </DexEntryTextContainer>
        </DexEntryWrapper>
      ))}
    </Container>
  );
}

export default PokemonDetail;