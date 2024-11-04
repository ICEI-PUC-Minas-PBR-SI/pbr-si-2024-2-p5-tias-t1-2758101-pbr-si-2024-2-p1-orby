import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TYPES } from "./StepsTypes";
import OrbySelectableButtonGroup from "../../../components/orby-button/OrbySelectableButtonGroup";
import OrbyCheckBoxGroup from "../../../components/orby-checkbox/OrbyCheckBoxGroup";
import { useForm } from "../formContext";
import OrbyFormInput from "./OrbyFormInput";

const OrbyFormHandler = ({ step }) => {
  const { updateForm } = useForm();

  const handleAnswer = (data) => {
    updateForm(data);
  };

  return step.map((data) => (
    <View key={data.questionId}>
      <Text style={styles.question}>{data.question}</Text>

      {data.label && <Text style={styles.primaryText}>{data.label}</Text>}

      {data.type === TYPES.selectableButtonGroup && (
        <OrbySelectableButtonGroup
          buttons={data.buttons}
          onSelect={(value) =>
            handleAnswer({
              answer: value,
              question: data.question,
              questionId: data.questionId,
            })
          }
        />
      )}

      {data.type === TYPES.optionList && (
        <OrbyCheckBoxGroup
          items={data.buttons}
          setItems={(values) =>
            handleAnswer({
              answer: values.join(),
              question: data.question,
              questionId: data.questionId,
            })
          }
        />
      )}

      {data.type === TYPES.input && (
        <OrbyFormInput
          placeholder={data.input.placeHolder}
          type={data.input.type}
          onChangeText={(value) =>
            handleAnswer({
              answer: value,
              question: data.question,
              questionId: data.questionId,
            })
          }
        />
      )}
    </View>
  ));
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
    textAlign: "center",
  },
  primaryText: {
    fontSize: 18,
    marginBottom: 16,
    color: "#CD3232",
    textAlign: "center",
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
