import styled from 'styled-components/native'


export const Container = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 8px;
`;

export const Label  = styled.Text`
margin-right: 8px;
width: 80px;
font-weight: bold;
`;
export const Bar = styled.View`
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;