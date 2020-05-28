import React from "react";

// dependency of native navigation
import { useScreens } from "react-native-screens";
useScreens();

// The root component, host of the navigation container
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "@navigators/RootStackNavigator";
const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
