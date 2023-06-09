import styled from 'styled-components/native';


export const DexEntryWrapper = styled.View`
  padding-vertical: 8px;
  width: 350px;
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

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;
