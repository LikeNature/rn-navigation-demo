import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootParam } from "../types";
import MainStack from "./MainStack";
import SubStack from "./SubStack";

const Tab = createBottomTabNavigator();

const BottomNav = ({ navigation, route }: RootParam<"Root">) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={MainStack} />
      <Tab.Screen name="SubTab" component={SubStack} />
    </Tab.Navigator>
  );
};

export default BottomNav;
