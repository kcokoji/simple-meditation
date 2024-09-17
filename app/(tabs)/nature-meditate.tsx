import { View, Text } from "react-native";
import React from "react";
import AppGradient from "@/components/app-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>NatureMeditate</Text>
      </AppGradient>
    </View>
  );
};

export default NatureMeditate;
