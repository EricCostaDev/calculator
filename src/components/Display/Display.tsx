import { View, Text } from "react-native";
import React from "react";
import {
  DisplayContainer,
  DisplayContentContainer,
  DisplayContent,
} from "./styles";

export interface IDispalyProps {
  content: string;
}

const Display = ({ content }: IDispalyProps) => {
  return (
    <>
      <DisplayContainer>
        <DisplayContentContainer>
          <DisplayContent>{content}</DisplayContent>
        </DisplayContentContainer>
      </DisplayContainer>
    </>
  );
};

export default Display;
