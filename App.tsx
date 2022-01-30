import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import {
  BigButtonsContainer,
  Container,
  SmallButtonsContainer,
} from "./styles";

export default function App() {
  const [number, setNumber] = useState("");
  const [arrValues, setArrValues] = useState<any>([]);

  const handleButtonPress = (char: string) => {
    switch (char) {
      case "ac":
        setNumber("");
        break;
      case "()":
        setNumber(number.concat(char));
        break;
      case "%":
        setNumber(number.concat(char));
        break;
      case "/":
        setNumber(number.concat(char));
        break;
      case "x":
        setNumber(number.concat("*"));
        break;
      case "-":
        setNumber(number.concat(char));
        break;
      case "+":
        setNumber(number.concat(char));
        break;
      case "=":
        break;
      case ",":
        setNumber(number.concat(char));
        break;
      case "<-x":
        setNumber(number.slice(0, number.length - 1));
        break;
      default:
        if (number === "") {
          setNumber(char);
          return;
        }
        setNumber(number.concat(char));
        // let aux = number.split("");
        // console.log("aux antes - ", aux);

        // console.log("aux depois - ", aux.push(number).toString());
        break;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={{ flex: 1 }}
    >
      <StatusBar backgroundColor="#36454f" />
      <Container>
        <Display content={number} />
        <SmallButtonsContainer></SmallButtonsContainer>
        <BigButtonsContainer>
          <Button
            color="#58f7ba"
            onPress={() => handleButtonPress("ac")}
            title="AC"
          />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("()")}
            title="()"
          />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("%")}
            title="%"
          />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("/")}
            title="/"
          />
          {}
          <Button onPress={() => handleButtonPress("7")} title="7" />
          <Button onPress={() => handleButtonPress("8")} title="8" />
          <Button onPress={() => handleButtonPress("9")} title="9" />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("X")}
            title="X"
          />
          {}
          <Button onPress={() => handleButtonPress("4")} title="4" />
          <Button onPress={() => handleButtonPress("5")} title="5" />
          <Button onPress={() => handleButtonPress("6")} title="6" />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("-")}
            title="-"
          />
          {}
          <Button onPress={() => handleButtonPress("1")} title="1" />
          <Button onPress={() => handleButtonPress("2")} title="2" />
          <Button onPress={() => handleButtonPress("3")} title="3" />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("+")}
            title="+"
          />
          {}
          <Button onPress={() => handleButtonPress("0")} title="0" />
          <Button onPress={() => handleButtonPress(",")} title="," />
          <Button onPress={() => handleButtonPress("<-x")} title="<-x" />
          <Button
            color="#efe"
            onPress={() => handleButtonPress("=")}
            title="="
          />
        </BigButtonsContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
