import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import { COLORS } from "../../assets/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export function FormHeader(prop) {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primary_light]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.headerContainer}
    >
      <TouchableOpacity onPress={prop.leftButton}>
        <Ionicons
          size={40}
          color={COLORS.white}
          name="chevron-back"
          style={styles.header_left_button}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{prop.title}</Text>
      <View style={styles.spacer} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#EE4D47",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header_left_button: {
    marginStart: 2,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
  },
  spacer: {
    width: 32, // Adjust width to match button width
  },
});
