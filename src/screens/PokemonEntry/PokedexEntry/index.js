import * as React from 'react';
import formatName from '../../../services/textFormat/FormatName';
import formatEntry from '../../../services/textFormat/FormatEntry';
import EntriesList from '../../../services/requisitions/EntriesList';
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
  const pokemonEntries = EntriesList(pokemonData.species.url)
  const pokemonEntrySample = [
    { name: 'Violet', flavor_text: 'No entry available, perhaps it will be added in the future' },
    { name: 'Scarlet', flavor_text: 'No entry available, perhaps it is lost in the past' }
  ]

  return (
    <Container>
    {(pokemonEntries.length === 0 ? pokemonEntrySample : pokemonEntries).map((textEntry, index) => (
      <DexEntryWrapper key={index}>
        <DexEntryGameContainer>
          <DexEntryGame>From: Pokemon {formatName(textEntry.name)}</DexEntryGame>
        </DexEntryGameContainer>
        <DexEntryTextContainer>
          <DexEntryText>{formatEntry(textEntry.flavor_text)}</DexEntryText>
        </DexEntryTextContainer>
      </DexEntryWrapper>
    ))}
  </Container>
  );
}

export default PokemonDetail;
