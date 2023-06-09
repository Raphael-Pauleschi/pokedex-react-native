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
  
      {pokemonEntries.length == 0 && (
        <>
          <DexEntryWrapper>
            <DexEntryGameContainer>
              <DexEntryGame>From: Pokemon Scarlet</DexEntryGame>
            </DexEntryGameContainer>
            <DexEntryTextContainer>
              <DexEntryText>
                No entry available, perhaps it is lost in the past
              </DexEntryText>
            </DexEntryTextContainer>
          </DexEntryWrapper>
          <DexEntryWrapper>
            <DexEntryGameContainer>
              <DexEntryGame>From: Pokemon Violet</DexEntryGame>
            </DexEntryGameContainer>
            <DexEntryTextContainer>
              <DexEntryText>
                No entry available, perhaps it will be added in the future
              </DexEntryText>
            </DexEntryTextContainer>
          </DexEntryWrapper>
        </>
      )}

      {pokemonEntries.map((textEntry, index) => (
        <DexEntryWrapper key={index}>
          <DexEntryGameContainer>
            <DexEntryGame>From: Pokemon {formatName(textEntry.version.name)}</DexEntryGame>
          </DexEntryGameContainer>
          <DexEntryTextContainer>
            <DexEntryText>{textEntry.flavor_text}</DexEntryText>
          </DexEntryTextContainer>
        </DexEntryWrapper>
      ))}


    </Container>
  );
}

export default PokemonDetail;
