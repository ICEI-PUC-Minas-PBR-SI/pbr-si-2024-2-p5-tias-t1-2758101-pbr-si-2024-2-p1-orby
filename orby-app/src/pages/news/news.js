import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export function News({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("login", { title: "asdasd" });
        }}
      >
        <Text style={styles.outlined_button}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outlined_button: {
    color: COLORS.primary,
    FontFace: "Jaldi_700Bold",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "right",
    marginEnd: 24,
  },
});
