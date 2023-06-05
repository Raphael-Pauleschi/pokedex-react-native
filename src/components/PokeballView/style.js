import styled from 'styled-components/native';

export const PokeballContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PokeballUp = styled.View`
  background-color: red;
  padding: 20px;
  width: 100px;
  height: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const PokeballDown = styled.View`
  background-color: #d9dbda;
  padding: 20px;
  width: 100px;
  height: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const PokeballStrip = styled.View`
  background-color: black;
  height: 5px;
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const PokeballImage = styled.Image`
  width: 100px;
  height: 100px;
  position: absolute;
`;
