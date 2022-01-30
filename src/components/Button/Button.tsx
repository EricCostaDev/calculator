import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactElement } from "react";
import { ButtonContainer, ButtonText } from "./styles";

export interface IButtonProps {
  type?: string;
  title?: string;
  onPress: () => any;
  color?: string;
}

const Button = ({
  type,
  title,
  onPress,
  color,
}: IButtonProps): ReactElement => {
  return (
    <>
      <ButtonContainer color={color || "#222"} onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Button;

Button.defaultProps = {
  title: "",
  // color: "#222",
};
