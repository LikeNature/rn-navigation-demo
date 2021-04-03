import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootList } from "../types";
import CartScreen from "../screen/CartScreen";
import ItemScreen from "../screen/ItemScreen";

const Stack = createStackNavigator();

const SubTab = ({ navigation, route }: RootList<"SubTab">) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} options={{headerShown : false}} />
    </Stack.Navigator>
  );
};

export default SubTab;
