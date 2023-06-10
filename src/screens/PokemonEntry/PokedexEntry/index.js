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
  const [pokemonEntries, setPokemonEntries] = useState([]);

  const pokemonEntrySample = [
    { name: 'Violet', flavor_text: 'No entry available, perhaps it will be added in the future' },
    { name: 'Scarlet', flavor_text: 'No entry available, perhaps it is lost in the past' }
  ]

  useEffect(() => {
    const fetchPokemonEntries = async () => {
      try {
        const response = await axios.get(pokemonData.species.url);
        const data = response.data;
        const englishEntries = data.flavor_text_entries.filter(
          (entry) => entry.language.name === 'en'
        );

        setPokemonEntries(
          englishEntries
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonEntries();
  }, [pokemonData]);


  function formatEntry(text) {
    //Due to getting info from gb and gba games the text is oddly formated
    return (text.replace(/\f/g, '\n')
      .replace(/\u00ad\n/g, '')
      .replace(/\u00ad/g, '')
      .replace(/ -\n/g, ' - ')
      .replace(/-\n/g, '-')
      .replace(/\n/g, ' '))
  }

  return (
    <Container>

      {pokemonEntries.length == 0 && (
        pokemonEntrySample.map((textEntry, index) => (
          <DexEntryWrapper key={index}>
            <DexEntryGameContainer>
              <DexEntryGame>From: Pokemon {textEntry.name}</DexEntryGame>
            </DexEntryGameContainer>
            <DexEntryTextContainer>
              <DexEntryText>{textEntry.flavor_text}</DexEntryText>
            </DexEntryTextContainer>
          </DexEntryWrapper>
        ))
      )}

      {pokemonEntries.map((textEntry, index) => (
        <DexEntryWrapper key={index}>
          <DexEntryGameContainer>
            <DexEntryGame>From: Pokemon {formatName(textEntry.version.name)}</DexEntryGame>
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
