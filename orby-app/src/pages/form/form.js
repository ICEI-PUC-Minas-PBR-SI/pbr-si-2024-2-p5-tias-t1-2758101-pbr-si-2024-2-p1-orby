import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getForm } from "../../services/formService";
import OrbyFormStep from "../../components/orby-form-step/OrbyFormStep";
import { useIsFocused } from "@react-navigation/native";

export function Form({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getForm();
        setFormData(data);
        setCurrentStep(0);
      } catch (error) {
        console.error("Erro", error);
      }
    };

    fetchData();
  }, [isFocused]);

  const handleNext = (stepQuestions) => {
    console.log(stepQuestions);
    if (currentStep < formData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Formulário concluído!");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  if (!formData) {
    // Carregando ou não há dados, então você pode renderizar um indicador de carregamento
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} keyboardShouldPersistTaps="handled">
      <OrbyFormStep stepData={formData[currentStep]} onNext={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
});
