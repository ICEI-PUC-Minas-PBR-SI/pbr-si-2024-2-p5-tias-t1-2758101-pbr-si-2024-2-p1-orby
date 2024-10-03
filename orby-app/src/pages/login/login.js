import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { COMMON_STYLES } from "../../assets/common_styles";
import React from "react";

export function Login({ navigation, props }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/orby_logo.png")} />
      <Text style={COMMON_STYLES.boldHeadline}>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
