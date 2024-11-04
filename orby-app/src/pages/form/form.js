import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getForm } from "../../services/formService";
import OrbyFormStep from "./orby-form-step/OrbyFormStep";
import { useIsFocused } from "@react-navigation/native";
import { FormProvider } from "./formContext";
import FormResult from "./formResult";

export function Form({ navigation }) {
  const [nextStep, setNextStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const [isFormFinished, setIsFormFinished] = useState(false); // Adiciona estado para saber se o form terminou
  const [isValid, setIsValid] = useState(true); // Estado para definir se o resultado é válido ou não

  const isFocused = useIsFocused();

  const fetchData = async (answers = null) => {
    try {
      console.log(nextStep);
      const data = await getForm(nextStep, answers);

      if (data.isAble == true) {
        setFormData({ questions: data.questions, button: data.nextButton });
        setNextStep(data.nextStep);
      } else {
        setIsFormFinished(true);
        setIsValid(data.isAble);
      }

      if (!data.hasNextStep) {
        setIsFormFinished(true);
        setIsValid(data.isAble);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    setNextStep(1);

    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleNext = (answers) => {
    fetchData(answers);
  };

  if (isFormFinished) {
    return (
      <FormResult
        isValid={isValid}
        text={
          isValid
            ? "Parabéns! Você está apto para doar."
            : "Infelizmente você não está apto para doar."
        }
        onButtonClick={() => {
          setIsFormFinished(false);
          setNextStep(1);
          fetchData();
        }}
      />
    );
  }

  if (!formData) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <FormProvider>
      <View style={styles.container} keyboardShouldPersistTaps="handled">
        <ScrollView>
          <OrbyFormStep
            stepData={formData.questions}
            nextButton={formData.button}
            onNext={handleNext}
          />
        </ScrollView>
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    marginVertical: 12,
  },
});
