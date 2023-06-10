import * as React from 'react';
import formatName from '../../../services/textFormat/FormatName';
import {
  AbilityWrapper,
  AbilityTitle,
  AbilityText,
  Container,
  AbilityTitleContainer,
  AbilityTextContainer,
} from './style';
import AbilitiesList from '../../../services/requisitions/AbilitiesList';


function PokemonAbilities({ route }) {
  const pokemonData = route.params;
  const pokemonAbilities= AbilitiesList(pokemonData)

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

export default PokemonAbilities;