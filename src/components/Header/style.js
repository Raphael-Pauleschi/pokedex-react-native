import styled from 'styled-components/native';

export const PokemonImage = styled.Image`
  width: 180px;
  height: 180px;
  align-self: center;
`;

export const PokemonName = styled.Text`
  font-size: 30px;
  text-align: center;
  background-color: pink;
`;

export const ImageWrapper = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;


export const Container = styled.SafeAreaView`
background-color: white;
`;
