import styled from 'styled-components/native';

export const ButtonText = styled.Text`
  color: ${(props: { color: string; }) => props.color === '#222' ? '#fff' : '#222'};
  font-size: ${(props: { type: string; }) => {if (props.type === 'small'){return '18px'} else {return '24px'}}};
  font-weight: 600;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: { color: string; }) => props.color}
  border-radius: 64px;
  margin-right: 5px;
  margin-bottom: 10px;
`;
export const SmallButtonContainer = styled.TouchableOpacity`
width: 50px;
height: 38px;
justify-content: center;
align-items: center;
background-color: transparent;
border-radius: 64px;
margin-right: 5px;
margin-bottom: 10px;
border: 1px solid white;
`;