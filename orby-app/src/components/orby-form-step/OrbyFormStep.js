import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TYPES } from "./StepsTypes";
import OrbyFormHandler from "./OrbyFormHandler";

const OrbyFormStep = ({ stepData, onNext }) => {
  const [stepQuestions, setStepQuestion] = useState([]);

  const handleOnNext = () => {
    onNext(stepQuestions);
  };

  const handleStepQuestions = (questions) => {
    console.log(questions);
    setStepQuestion((prevState) => [...prevState, ...questions]);
  };

  useEffect(() => {
    const formQuestion = stepData.find(
      (data) => data.type === TYPES.questionText
    );

    const innerQuestions =
      stepData
        .find((data) => data.type === TYPES.selectableButtonGroup)
        ?.buttons.childOptions?.filter(
          (data) => data.type === TYPES.questionText
        ) || [];

    const concatQuestions = [formQuestion, ...innerQuestions];

    setStepQuestion((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];

      concatQuestions.forEach((question) => {
        const existingIndex = updatedQuestions.findIndex(
          (q) => q.id === question.id
        );
        if (existingIndex > -1) {
          updatedQuestions[existingIndex] = {
            id: question.id,
            question: question.content,
            answer: "",
          };
        } else {
          updatedQuestions.push({
            id: question.id,
            question: question.content,
            answer: "",
          });
        }
      });

      return updatedQuestions; // Retorne o novo estado atualizado
    });
  }, [stepData]);

  return (
    <View style={styles.stepContainer}>
      <OrbyFormHandler
        step={stepData}
        setStepQuestion={handleStepQuestions}
        onNext={handleOnNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrbyFormStep;
