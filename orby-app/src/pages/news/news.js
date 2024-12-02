import { StyleSheet, View } from "react-native";
import React from "react";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";

export function News({ navigation }) {
  return (
    <View style={styles.container}>
      <OrbyLogo title="Em desenvolvimento..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
});
