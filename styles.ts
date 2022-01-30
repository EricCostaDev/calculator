import { SafeAreaView } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: #11100f;
    align-items: center;
    justify-content: flex-start;

`
export const BigButtonsContainer = styled.View `
    border: 1px solid white;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    height: 58%;
    padding: 5px 12px;
    justify-content: space-evenly;
    align-items: center;

`
export const SmallButtonsContainer = styled.View`
    border: 1px solid white;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    height: 7%;
    padding: 5px 12px;
    justify-content: space-evenly;
    align-items: center;    
`