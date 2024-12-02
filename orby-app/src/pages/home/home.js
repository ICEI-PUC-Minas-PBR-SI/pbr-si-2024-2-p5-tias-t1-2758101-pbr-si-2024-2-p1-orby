import { StyleSheet, View } from "react-native";
import OrbyIconButton from "../../components/orby-button/OrbyIconButton";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <OrbyLogo title="Home" />

      <View style={styles.gridContainer}>
        <OrbyIconButton
          label="Sobre nós"
          imageSource={require("../../assets/ic_about_us.png")} // Caminho da imagem
          onPress={() => navigation.navigate("HomeNestedScreens",{screen: "aboutus"})}
        />
        <OrbyIconButton
          label="Notícias"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => navigation.navigate("HomeNestedScreens",{screen: "noticias"})}
        />
        <OrbyIconButton
          label="Fórum"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => navigation.navigate("HomeNestedScreens")}
        />
        <OrbyIconButton
          label="Patrocínios"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => navigation.navigate("HomeNestedScreens",{screen: "sponsors"})}
        />
        <OrbyIconButton
          label="Tipos Sanguíneos"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => navigation.navigate("HomeNestedScreens",{screen: "btypes"})}
        />
        <OrbyIconButton
          label="Dúvidas"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => navigation.navigate("HomeNestedScreens",{screen: "questions"})}
        />
      </View>
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
});
