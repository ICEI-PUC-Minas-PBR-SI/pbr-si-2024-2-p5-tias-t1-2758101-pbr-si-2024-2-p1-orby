import { StyleSheet, View } from "react-native";
import OrbyIconButton from "../../components/orby-button/OrbyIconButton";
import { useAuth } from "../AuthContext";

export function Profile({ navigation }) {
  const { setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <OrbyIconButton
        label="Deslogar"
        imageSource={require("../../assets/ic_about_us.png")}
        onPress={() => handleLogout()}
      />
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
