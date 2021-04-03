import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "./BottomNav";

const Drawer = createDrawerNavigator();

const RootNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType={"front"} drawerPosition={"left"}
      >
        <Drawer.Screen name="bottom" component={BottomNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
