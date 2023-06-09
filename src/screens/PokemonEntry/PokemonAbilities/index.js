import React, { useState, useEffect } from 'react';
import axios from 'axios';
import formatName from '../../../services/FormatName';
import {
  AbilityWrapper,
  AbilityTitle,
  AbilityText,
  Container,
  AbilityTitleContainer,
  AbilityTextContainer,
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
            const hiddenAbility = response.data.pokemon.find((pokemon) => pokemon.pokemon.name === pokemonData.name && pokemon.is_hidden);
            return { name: ability.ability.name, effect: englishEntry.effect, hiddenAbility };
          
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
        <AbilityWrapper key={index}>
          <AbilityTitleContainer>
            <AbilityTitle>{formatName(ability.name)} {ability.hiddenAbility && "(Hidden)"}</AbilityTitle>
          </AbilityTitleContainer>
          <AbilityTextContainer>
            <AbilityText>{ability.effect}</AbilityText>
          </AbilityTextContainer>
        </AbilityWrapper>
      ))}
    </Container>
  );
}

export default PokemonDetail;