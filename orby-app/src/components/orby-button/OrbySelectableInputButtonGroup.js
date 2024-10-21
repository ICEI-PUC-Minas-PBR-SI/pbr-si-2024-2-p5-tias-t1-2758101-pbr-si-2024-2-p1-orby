import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import OrbyFormInput from "../orby_input/OrbyFormInput";

const OrbySelectableInputButtonGroup = ({ content, onSelect }) => {
  const [isButtonSelected, setIsButtonSelected] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    handleSelect(true, content.button.label);
  }, []);

  const handleSelect = (isButton, value) => {
    setIsButtonSelected(isButton);

    if (isButton) {
      setInputValue("");
    }

    onSelect(value);
  };

  const textChange = (value) => {
    var weeks = value;
    if (Number.parseInt(weeks) > 42) {
      weeks = "42";
    }
    handleSelect(false, weeks);
    setInputValue(weeks);
  };

  return (
    <View style={styles.container}>
      {content.button.image ? (
        <TouchableOpacity
          style={[
            styles.button,
            isButtonSelected ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => handleSelect(true, content.button.label)}
        >
          <Text style={styles.label}>{content.button.label}</Text>
          <Image source={content.button.image} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            styles.button,
            isButtonSelected ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => handleSelect(true, content.button.label)}
        >
          <Text
            style={[
              styles.label,
              isButtonSelected ? styles.selectedLabel : styles.unselectedLabel,
            ]}
          >
            {content.button.label}
          </Text>
        </TouchableOpacity>
      )}

      {content.input ? (
        <OrbyFormInput
          customStyle={styles.input}
          value={inputValue}
          topLabel={content.input.upperLabel}
          sideLabel={content.input.sideLabel}
          onChangeText={textChange}
          placeholder="N"
          maxLenght={2}
          type={content.input.type}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#CD3232", // Fundo vermelho quando selecionado
  },
  unselectedButton: {
    backgroundColor: "transparent", // Fundo padrão quando não selecionado
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedLabel: {
    color: "white", // Fundo vermelho quando selecionado
  },
  unselectedLabel: {
    color: "#CD3232", // Fundo padrão quando não selecionado
  },
});

export default OrbySelectableInputButtonGroup;
