import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TYPES } from "./StepsTypes";
import OrbyButton from "../orby-button/OrbyButton";
import OrbySelectableButtonGroup from "../orby-button/OrbySelectableButtonGroup";
import OrbyCheckBoxGroup from "../orby-checkbox/OrbyCheckBoxGroup";
import OrbySelectableInputButtonGroup from "../orby-button/OrbySelectableInputButtonGroup";

const OrbyFormHandler = ({ step, setStepQuestion, onNext }) => {
  const [id, setId] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const data = step.find((data) => data.type == TYPES.questionText);
    setId(data.id);
    setQuestion(data.content);
  }, []);

  const handleSelectableButtonGroup = (value, innerQuestions) => {
    setStepQuestion([
      { id: id, question: question, answer: value },
      ...innerQuestions,
    ]);
  };

  const handleSelectableInputButtonGroup = (value) => {
    setStepQuestion({ id: id, answer: value });
  };

  const handleCheckboxGroup = (selectedItems) => {
    setStepQuestion([{ id: id, answer: selectedItems.join() }]);
  };

  return step.map((data) => {
    if (data.type == TYPES.questionText) {
      return <Text style={styles.question}>{data.content}</Text>;
    }

    if (data.type == TYPES.primaryText) {
      return <Text style={styles.primaryText}>{data.content}</Text>;
    }

    if (data.type == TYPES.selectableButtonGroup) {
      return (
        <OrbySelectableButtonGroup
          buttons={data.buttons}
          onSelect={handleSelectableButtonGroup}
        />
      );
    }

    if (data.type == TYPES.selectableButtonInputGroup) {
      return (
        <OrbySelectableInputButtonGroup
          content={data}
          onSelect={handleSelectableInputButtonGroup}
        />
      );
    }

    if (data.type == TYPES.optionList) {
      return (
        <OrbyCheckBoxGroup
          items={data.options}
          setItems={handleCheckboxGroup}
        />
      );
    }

    if (data.type == TYPES.nextButton) {
      return (
        <OrbyButton
          onPress={onNext}
          title={data.content}
          customStyle={styles.button}
        />
      );
    }

    // Caso nenhum tipo de dado corresponda, pode retornar um fallback
    return null;
  });
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 30,
    color: "#949494",
    fontWeight: "bold",
  },
  primaryText: {
    fontSize: 18,
    marginBottom: 16,
    color: "#CD3232",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  button: {
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default OrbyFormHandler;
