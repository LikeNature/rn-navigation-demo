import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainParamList } from "../types";
const LoginScreen = ({ navigation, route }: MainParamList<"LoginScreen">) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "red" }]}>
      <Text>Home</Text>
    </View>
  );
};

export default LoginScreen;
