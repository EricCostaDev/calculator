import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
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
  SimpleOperationsRow,
  SmallButtonsContainer,
  TrigonometricOperationsRow,
} from "./styles";

export default function App() {
  const [number, setNumber] = useState("");
  const [arrValues, setArrValues] = useState<any>([]);
  const [showTrigonometricOptions, setShowTrigonometricOptions] =
    useState(false);
  const [operationFlag, setOperationFlag] = useState({
    active: false,
    type: "",
  });

  const handleCalculateProcess = () => {
    let convertedNumber = convertIntoMathSymbol(number);
    console.log("convertedNumber ", convertedNumber);
    // if (operationFlag) return;
    setNumber(eval(convertedNumber).toString());
  };

  const convertIntoMathSymbol = (input: string) => {
    let converted: any = input
      .replace(/[x]/, "*")
      .replace(/([pi])+/, "Math.PI")
      .replace(/[e]/, "Math.E");

    if (converted.includes("^")) {
      let exponential: any = converted.match(/([0-9][/^][0-9])/g);
      console.log(exponential);
      let exponentialResults: any = [];
      exponential.forEach((e: any, index: any) => {
        exponentialResults.push(Math.pow(e.split("^")[0], e.split("^")[1]));
      });
      for (let index in exponentialResults) {
        converted = converted.replace(
          exponential[index],
          exponentialResults[index]
        );
      }
    }
    if (converted.match("sqrt") && converted.match("sqrt")[0] === "sqrt") {
      let squareRoots: any = converted.match(/sqrt\(\d*\)/g);
      console.log("alo ", squareRoots);
      let squareRootsResults: any = [];
      squareRoots.forEach((e: any, index: any) => {
        squareRootsResults.push(
          Math.sqrt(e.match(/\d*/g).filter((e: any) => e)).toFixed(2)
        );
      });
      setOperationFlag({ active: false, type: "" });
      console.log("squareRootsResults ", squareRootsResults);
      for (let index in squareRootsResults) {
        converted = converted.replace(
          squareRoots[index],
          squareRootsResults[index]
        );
      }
      // for (let index in exponentialResults) {
      //   converted = converted.replace(
      //     exponential[index],
      //     exponentialResults[index]
      //   );
      // }
    }

    return converted;

    // [[a,b],[a,b],[a,b]]
  };

  const handleButtonPress = (char: string) => {
    switch (char) {
      case "ac":
        setNumber("");
        break;
      case "()":
        if (operationFlag.active) {
          setNumber(number.concat(")"));
        } else {
          setNumber(number.concat("("));
        }
        break;
      case "%":
        setNumber(number.concat(char));
        break;
      case "/":
        setNumber(number.concat(char));
        break;
      case "x":
        setNumber(number.concat(char));
        break;
      case "-":
        setNumber(number.concat(char));
        break;
      case "+":
        setNumber(number.concat(char));
        break;
      case "=":
        handleCalculateProcess();
        break;
      case ",":
        setNumber(number.concat("."));
        break;
      case "<-x":
        setNumber(number.slice(0, number.length - 1));
        break;
      case "sqrt":
        setOperationFlag({ active: true, type: "sqrt" });
        setNumber(number.concat(`${char}(`));
        break;
      case "pi":
        setNumber(number.concat(char));
        break;
      case "exp":
        setNumber(number.concat("^"));
        break;
      case "fat":
        setNumber(number.concat(char));
        break;
      case "rad":
        setNumber(number.concat(char));
        break;
      case "sin":
        setNumber(number.concat(char));
        break;
      case "cos":
        setNumber(number.concat(char));
        break;
      case "tan":
        setNumber(number.concat(char));
        break;
      case "inv":
        setNumber(number.concat(char));
        break;
      case "e":
        setNumber(number.concat(char));
        break;
      case "ln":
        setNumber(number.concat(char));
        break;
      case "log":
        setNumber(number.concat(char));
        break;
      default:
        if (number === "") {
          setNumber(char);
          return;
        }
        // if(operationFlag.active){
        //   switch(operationFlag.type){
        //     case 'sqrt':
        //       setNumber(number.concat());
        //       break;
        //   }
        // }
        setNumber(number.concat(char));
        // let aux = number.split("");
        // console.log("aux antes - ", aux);

        // console.log("aux depois - ", aux.push(number).toString());
        break;
    }
  };

  const showTrigonometricOperations = () => {
    setShowTrigonometricOptions(!showTrigonometricOptions);
    console.log("estado do chevron", showTrigonometricOptions);
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
        <SmallButtonsContainer>
          <SimpleOperationsRow>
            <Button
              type="small"
              title="sqrt"
              onPress={() => handleButtonPress("sqrt")}
            />
            <Button
              type="small"
              title="pi"
              onPress={() => handleButtonPress("pi")}
            />
            <Button
              type="small"
              title="^"
              onPress={() => handleButtonPress("exp")}
            />
            <Button
              type="small"
              title="!"
              onPress={() => handleButtonPress("fat")}
            />
            {showTrigonometricOptions ? (
              <>
                <Ionicons
                  name="chevron-up-circle-sharp"
                  size={34}
                  color="#443f3ae0"
                  onPress={() => {}}
                />
              </>
            ) : (
              <>
                <Ionicons
                  name="chevron-down-circle-sharp"
                  size={34}
                  color="#443f3ae0"
                  onPress={() => {}}
                />
              </>
            )}
          </SimpleOperationsRow>
          <TrigonometricOperationsRow show={showTrigonometricOptions}>
            <Button
              type="small"
              title="RAD"
              onPress={() => handleButtonPress("rad")}
            />
            <Button
              type="small"
              title="sin"
              onPress={() => handleButtonPress("sin")}
            />
            <Button
              type="small"
              title="cos"
              onPress={() => handleButtonPress("cos")}
            />
            <Button
              type="small"
              title="tan"
              onPress={() => handleButtonPress("tan")}
            />
            <Button
              type="small"
              title="INV"
              onPress={() => handleButtonPress("inv")}
            />
            <Button
              type="small"
              title="e"
              onPress={() => handleButtonPress("e")}
            />
            <Button
              type="small"
              title="ln"
              onPress={() => handleButtonPress("ln")}
            />
            <Button
              type="small"
              title="log"
              onPress={() => handleButtonPress("log")}
            />
          </TrigonometricOperationsRow>
        </SmallButtonsContainer>
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

          <Button onPress={() => handleButtonPress("7")} title="7" />
          <Button onPress={() => handleButtonPress("8")} title="8" />
          <Button onPress={() => handleButtonPress("9")} title="9" />
          <Button
            color="#4af"
            onPress={() => handleButtonPress("x")}
            title="X"
          />

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
