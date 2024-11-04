import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import OrbyFormInput from "../../pages/form/orby-form-step/OrbyFormInput";

const OrbySelectableButtonGroup = ({ buttons, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectableAnswer, setSelectableAnswer] = useState(buttons[0].label);
  const [inputAnswer, setInputAnswer] = useState("");

  const handleSelect = (index, value) => {
    setSelectedIndex(index);

    setSelectableAnswer(value);

    setCallbackValue();
  };

  const handleInput = (value) => {
    setInputAnswer(value);

    setCallbackValue();
  };

  const setCallbackValue = () => {
    onSelect(`${selectableAnswer}, ${inputAnswer}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedIndex === index
                ? styles.selectedButton
                : styles.unselectedButton,
            ]}
            onPress={() => handleSelect(index, button.label)}
          >
            {button.image ? (
              <Image source={button.image} style={styles.image} />
            ) : null}
            <Text
              style={[
                styles.label,
                selectedIndex === index
                  ? styles.selectedLabel
                  : styles.unselectedLabel,
              ]}
            >
              {button.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {buttons[selectedIndex]?.hasChildInput && (
        <View style={styles.childOptionsContainer}>
          <OrbyFormInput
            placeholder={buttons[selectedIndex].childInput.input.placeHolder}
            label={buttons[selectedIndex].childInput.input.label}
            type={buttons[selectedIndex].childInput.type}
            onChangeText={handleInput}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  childContainer: {
    flexDirection: "row", // Organiza as childOptions em coluna
    alignSelf: "center",
    marginTop: 16, // Espaçamento acima das opções filhas
  },
  childOptionsContainer: {
    flexDirection: "column", // Organiza as childOptions em coluna
    marginTop: 16, // Espaçamento acima das opções filhas
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

export default OrbySelectableButtonGroup;
