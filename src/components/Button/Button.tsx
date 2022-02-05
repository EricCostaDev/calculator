import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactElement } from "react";
import { ButtonContainer, ButtonText, SmallButtonContainer } from "./styles";

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
  if (type === "small") {
    return (
      <>
        <SmallButtonContainer color={"#222"} onPress={onPress}>
          <ButtonText type="small" color={"#222"}>
            {title}
          </ButtonText>
        </SmallButtonContainer>
      </>
    );
  }

  return (
    <>
      <ButtonContainer color={color ? color : "#222"} onPress={onPress}>
        <ButtonText color={color ? color : "#222"}>{title}</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Button;

Button.defaultProps = {
  title: "",
  // color: "#222",
};
