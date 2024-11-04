import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";
import OrbyButton from "../../components/orby-button/OrbyButton";

const FormResult = ({ isValid, text, onButtonClick }) => {
  const resultText =
    typeof text === "string"
      ? text
      : isValid
      ? "Aeee, parabéns! Você está apto para fazer sua doação!"
      : "Vishh, que pena! Infelizmente você não está apto a doar sangue no momento.";

  const resultPersonImage = isValid
    ? require("../../assets/ic_happy.png")
    : require("../../assets/ic_sad.png");

  const resultImage = isValid
    ? require("../../assets/ic_check.png")
    : require("../../assets/ic_cancel.png");

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <OrbyLogo />
        <Image source={resultPersonImage} style={styles.image} />
        <Image source={resultImage} style={styles.image} />
        <Text style={styles.text}>{resultText}</Text>
      </View>
      {!isValid && (
        <OrbyButton
          onPress={onButtonClick}
          title="Refazer formulário"
          customStyle={styles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    padding: 24,
  },
  resultContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignContent: "center",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default FormResult;
