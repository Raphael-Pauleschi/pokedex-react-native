import styled from 'styled-components/native';

export const PokemonImage = styled.Image`
  width: 180px;
  height: 180px;
  align-self: center;
`;

export const PokemonName = styled.Text`
  font-size: 50px;
  text-align: center;
  background-color: pink;
`;

export const DexEntryWrapper = styled.View`
  padding-vertical: 8px;
`;

export const DexEntryGameContainer = styled.View`
  background-color: pink;
  border-width: 1px;
  border-color: black;
`;

export const DexEntryGame = styled.Text``;

export const DexEntryTextContainer = styled.View`
  background-color: white;
  border-width: 1px;
  border-color: black;
`;

export const DexEntryText = styled.Text`
  text-align: justify;
`;

export const Container = styled.ScrollView``;
