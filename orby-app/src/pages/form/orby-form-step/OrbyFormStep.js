import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OrbyFormHandler from "./OrbyFormHandler";
import { useForm } from "../formContext";
import OrbyButton from "../../../components/orby-button/OrbyButton";

const OrbyFormStep = ({ stepData, nextButton, onNext }) => {
  const { form, clearForm } = useForm();

  const handleNext = () => {
    onNext(form);

    clearForm();
  };

  return (
    <View style={styles.stepContainer}>
      <OrbyFormHandler step={stepData} />

      {nextButton && (
        <OrbyButton
          onPress={handleNext}
          title={nextButton}
          customStyle={styles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 24,
  },
});

export default OrbyFormStep;
