import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/colors";

const OrbyIconButton = ({ label, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.icon} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    margin: 10,
    backgroundColor: COLORS.gray_background,
    borderRadius: 8,
    paddingVertical: 15,
    width: 120,
  },
  imageContainer: {
    marginBottom: 10,
  },
  icon: {
    width: 50, // Tamanho do ícone
    height: 50,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    color: COLORS.primary,
    textAlign: "center",
  },
});

export default OrbyIconButton;
