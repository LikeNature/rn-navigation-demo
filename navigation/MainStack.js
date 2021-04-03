import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootList } from "../types";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import ProfileScreen from "../screen/ProfileScreen";

const Stack = createStackNavigator();

const MainStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
