import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import {
  DisplayContainer,
  DisplayContentContainer,
  DisplayContent,
  BlinkContainer,
} from "./styles";

export interface IDispalyProps {
  content: string;
}

let MyCustomComponent = Animatable.createAnimatableComponent(View);

const Display = ({ content }: IDispalyProps) => {
  const ref: any = useRef(null);

  return (
    <>
      <DisplayContainer>
        <ScrollView
          ref={ref}
          horizontal
          onContentSizeChange={(width, height) => {
            ref.current.scrollToEnd();
          }}
        >
          <DisplayContentContainer>
            <DisplayContent text={content}>{content}</DisplayContent>
            <BlinkContainer text={content}>
              <Animatable.View
                animation={{
                  from: {
                    opacity: 0,
                  },
                  to: {
                    opacity: 1,
                  },
                }}
                easing="linear"
                iterationCount="infinite"
                duration={500}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "blue",
                }}
              ></Animatable.View>
            </BlinkContainer>
          </DisplayContentContainer>
        </ScrollView>
      </DisplayContainer>
    </>
  );
};

export default Display;
