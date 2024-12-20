import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS } from "../../assets/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export function Header(prop) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      {prop.leftButton != null ? (
        <TouchableOpacity onPress={prop.leftButton}>
          <Ionicons
            size={40}
            color={COLORS.primary}
            name="chevron-back"
            style={styles.header_left_button}
          />
        </TouchableOpacity>
      ) : null}

      <Text style={styles.header_text}>{prop.title}</Text>

      {prop.rightButton != null ? prop.rightButton : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  header_left_button: {
    marginStart: 2,
  },
  header_text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
});
