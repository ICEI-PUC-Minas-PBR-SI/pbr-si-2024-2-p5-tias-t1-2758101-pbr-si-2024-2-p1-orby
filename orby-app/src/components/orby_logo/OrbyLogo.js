import React from "react";
import { View, StyleSheet, Image, Text, StatusBar } from "react-native";
import { COMMON_STYLES } from "../../assets/common_styles";

const OrbyLogo = ({ title }) => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("../../../assets/orby_logo.png")} />
      {title && <Text style={COMMON_STYLES.boldHeadline}>{title}</Text>}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});

export default OrbyLogo;
