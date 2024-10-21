import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import OrbyFormHandler from "../orby-form-step/OrbyFormHandler";
import { TYPES } from "../orby-form-step/StepsTypes";

const OrbySelectableButtonGroup = ({ buttons, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [innerQuestions, setInnerQuestions] = useState([]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    onSelect(buttons[index].label, innerQuestions);
  };

  const handleStepQuestions = (form) => {
    const formQuestion = buttons[selectedIndex].childOptions.find(
      (data) => data.type === TYPES.questionText
    );

    setInnerQuestions((prevInnerQuestions) => {
      const updatedQuestions = [...prevInnerQuestions];

      const existingIndex = updatedQuestions.findIndex((q) => q.id === form.id);
      if (existingIndex > -1) {
        updatedQuestions[existingIndex] = {
          id: formQuestion.id,
          question: formQuestion.content,
          answer: form.answer,
        };
      } else {
        updatedQuestions.push({
          id: form.id,
          question: formQuestion,
          answer: form.answer,
        });
      }

      return updatedQuestions;
    });

    console.log(innerQuestions);
  };

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        {buttons.map((button, index) =>
          button.image ? (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedIndex === index
                  ? styles.selectedButton
                  : styles.unselectedButton,
              ]}
              onPress={() => handleSelect(index)}
            >
              <Text style={styles.label}>{button.label}</Text>
              <Image source={button.image} style={styles.image} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedIndex === index
                  ? styles.selectedButton
                  : styles.unselectedButton,
              ]}
              onPress={() => handleSelect(index)}
            >
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
          )
        )}
      </View>

      <View style={styles.childOptionsContainer}>
        {Array.isArray(buttons[selectedIndex]?.childOptions) &&
        buttons[selectedIndex].childOptions.length > 0 ? (
          <OrbyFormHandler
            step={buttons[selectedIndex].childOptions}
            setStepQuestion={handleStepQuestions}
          />
        ) : null}
      </View>
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
