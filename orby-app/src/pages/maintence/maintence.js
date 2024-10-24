import { StyleSheet, View } from "react-native";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";

export function MaintenceScreen() {
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
