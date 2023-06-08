import styled from "styled-components/native"

export const Container = styled.View`
margin-top: 8px;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 8px;
`;

export const TypeWrapper = styled.View`
border-radius: 15px;
justify-content: center;
align-items: center;
background-color: ${(props) => props.color};
`;

export const TypeName = styled.Text`
margin-right: 10px;
margin-left: 10px;
width: 80px;
text-align: center;
font-weight: bold;
font-size: 20px;
color: white;`;