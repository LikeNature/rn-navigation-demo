import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainParamList } from "../types";
const ProfileScreen = ({ navigation, route }: MainParamList<"ProfileScreen">) => {
  
  
  

  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "red" }]}>
      <Text>profile</Text>
    </View>
  );
};

export default ProfileScreen;