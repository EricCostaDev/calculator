import { SafeAreaView } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    max-height: 100%;
    background-color: #11100f;
    align-items: center;
    justify-content: flex-start;

`
export const BigButtonsContainer = styled.View `
    /* border: 1px solid white; */
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    height: 58%;
    /* max-height: 58%; */
    padding: 5px 12px;
    justify-content: space-evenly;
    align-items: stretch;

`
export const SmallButtonsContainer = styled.View`
    /* border: 1px solid white; */
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 100%;
    /* height: 7%; */
    justify-content: flex-start;
    align-items: center;    
`

export const SimpleOperationsRow = styled.View`
    flex-direction: row;
    width: 100%;
    /* height: 100%; */
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px solid white; */
    flex-wrap: wrap;
    /* max-width: 100%; */
    margin-bottom: 5px;
`

export const TrigonometricOperationsRow = styled.View`
    display: ${(props: { show: any; }) => props.show ? 'flex' : 'none'};
    flex-direction: row;
    border: 1px solid white;
    width: 100%;
    height: 100px;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;

`


