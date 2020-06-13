import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signin from "~/Pages/Signin/index";
import SignOut from "./Pages/SignOut/index";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Signin}>
        <Tab.Screen name="Signin" component={Signin} />
        <Tab.Screen name="SignOut" component={SignOut} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// ... other code from the previous section
