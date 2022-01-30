import styled from "styled-components/native";

export const DisplayContainer = styled.View`
    width: 100%;
    height: 35%;
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
    background-color: #36454f;
    justify-content: center;
    align-items: center;

`

export const DisplayContentContainer = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid black;

`

export const DisplayContent = styled.Text `
    font-size: 48px;
    color: white;
    font-weight: 400;
    letter-spacing: 6px;

`