import { View, Text } from "react-native";
import React from "react";

export interface IButtonProps {}

const Button = () => {
  return (
    <View>
      <Text>Eu sou um botao</Text>
    </View>
  );
};

export default Button;

Button.defaultProps = {};
