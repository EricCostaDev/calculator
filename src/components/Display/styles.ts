import { keyframes } from "styled-components";
import styled from "styled-components/native";


export const DisplayContainer = styled.View`
    width: 100%;
    height: 35%;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    background-color: #36454f;
    /* justify-content: center; */
    align-items: flex-end;

`

export const DisplayContentContainer = styled.View `
    width: 100%;
    flex-direction: row;
    align-self: center;
    /* justify-content: flex-end; */
    align-items: center;
    height: 80px;
    padding-top: 0;
    /* border: 1px solid black; */

`

export const DisplayContent = styled.Text `
    font-size: ${(props: { text: string | any[]; }) => props.text.length > 6 &&  props.text.length < 10 ? '48px' : props.text.length >= 10 ? '36px' : '72px'};
    color: white;
    height: ${(props: { text: string | any[]; }) => props.text.length > 6 &&  props.text.length < 10 ? '56px' : props.text.length >= 10 ? '44px' : '80px'};
    letter-spacing: 0;
    text-align: center;
    padding: 0;
    /* border: 1px solid black; */
    align-items: center;
    align-self: center;
    flex-direction: row-reverse;
`
export const BlinkContainer = styled.View `
    height: ${(props: { text: string | any[]; }) => props.text.length > 6 &&  props.text.length < 10 ? '48px' : props.text.length >= 10 ? '36px' : '80px'};
    width: 3px;
    margin-right: 2px;
    margin-left: 2px;
    /* border: 1px solid black; */
`