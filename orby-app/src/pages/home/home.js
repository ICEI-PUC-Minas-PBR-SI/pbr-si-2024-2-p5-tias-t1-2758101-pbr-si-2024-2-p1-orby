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
          onPress={() => console.log("Sobre nós clicado")}
        />
        <OrbyIconButton
          label="Notícias"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => console.log("Notícias clicado")}
        />
        <OrbyIconButton
          label="Fórum"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => navigation.navigate("HomeNestedScreens")}
        />
        <OrbyIconButton
          label="Patrocínios"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => console.log("Patrocínios clicado")}
        />
        <OrbyIconButton
          label="Tipos Sanguíneos"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => console.log("Tipos Sanguíneos clicado")}
        />
        <OrbyIconButton
          label="Dúvidas"
          imageSource={require("../../assets/ic_about_us.png")}
          onPress={() => console.log("Dúvidas clicado")}
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
