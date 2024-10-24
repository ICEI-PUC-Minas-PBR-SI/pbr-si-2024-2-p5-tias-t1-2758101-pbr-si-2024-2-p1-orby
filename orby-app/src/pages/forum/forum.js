import { StyleSheet, View } from "react-native";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";

export function Forum() {
  return (
    <View style={styles.container}>
      <OrbyLogo title="Fórum" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
});
