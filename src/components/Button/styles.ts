import styled from 'styled-components/native';

export const ButtonText = styled.Text`
  color: ${(props: { color: string; }) => props.color === '#222' ? '#fff' : '#fff'};
  font-size: 24px;
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
`
