# React Native Application Folder Structure According to React Native Proffesionals

### Create Src or App folder to contain all components and logic

## Have the following folders insisde Src or App Folder

### API

     - api functions

### Assets

     - svg, icons, images
        Can have other folders such as: images, svgs, fonts

### Components

     - Main components, such as: buttons, inputs, views, etc...

### Context

    - For creating contexts used in app

### Content

     - static content?

### Helpers/Utils

     - helper functions

### Styles

     - reusable styles in application

### Navigation

     - add navigation Stacks? and tabs and drawer?

### Store

     - Global state of application

### Hooks

     - custom hooks folder

### Localization

     - if app has multiple languages, this is where you handle the logic.

### Data

     - Dummy data

### Constants

     - Constans used across app

### Types

     - Typescript values used across app

### Screens

     - screens such as: auth, home, cart, etc...

<!--
import React from "react";
import { Text, View, PanResponder, Animated, Pressable } from "react-native";
import { brandName, brandMotto } from "./constants/global/global";
import SignInUp from "./screens";

export default function Index() {
  const squareRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const pan = React.useRef(new Animated.ValueXY()).current; // position
  const rotate = React.useRef(new Animated.Value(200)).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (_, gesture) => {
        // Manually update position
        pan.setValue({ x: 0, y: 0 });

        // Detect swipe direction
        const { dx, dy } = gesture;
        // Rotate proportional to horizontal movement
        rotate.setValue(dx);
      },
      onPanResponderRelease: () => {}
    })
  );

  const scale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    console.log("effect");
    Animated.timing(scale, {
      toValue: isActive ? 5 : 1,
      duration: 300, // smooth duration
      useNativeDriver: true // run animation on native thread
    }).start();
  }, [isActive, scale]);

  const rotateStr = rotate.interpolate({
    inputRange: [-50, 50],
    outputRange: ["-360deg", "360deg"],
    extrapolate: "extend"
  });

  return (
    <View
      ref={squareRef}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        rowGap: 32
      }}
    >
      <Animated.View
        {...panResponder.current?.panHandlers}
        style={{
          height: 50,
          width: 50,
          borderRadius: 100,
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
            { rotate: rotateStr },
            { scale }
          ]
        }}
      >
        <Pressable
          style={{
            backgroundColor: "green",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 100
          }}
          onPress={() => setIsActive((prev) => !prev)}
        >
          {[1, 2, 3, 8, null, 4, 7, 6, 5].map((number, index) => {
            return (
              <Text
                onPress={() => console.log("CLICK # ", number)}
                key={number}
                style={{
                  width: "33%",
                  height: "33%",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  transform: [
                    { translateX: number === 3 ? -4 : 0 },
                    { translateY: number === 3 ? 3 : 0 },
                    {
                      rotate:
                        number === 1
                          ? "-45deg"
                          : number === 2
                          ? "0deg"
                          : number
                          ? `${(number - 2) * 45}deg`
                          : "0deg"
                    }
                  ]
                }}
              >
                {number}
              </Text>
            );
          })}
        </Pressable>
      </Animated.View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Text> {brandName} </Text>
        <Text>{brandMotto}</Text>
      </View>
      <SignInUp />
    </View>
  );
} -->
