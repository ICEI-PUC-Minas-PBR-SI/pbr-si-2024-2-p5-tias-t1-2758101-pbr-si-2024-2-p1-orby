import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TYPES } from "../orby-form-step/StepsTypes";
import { COLORS } from "../../assets/colors";

const OrbyFormInput = ({
  value,
  topLabel,
  sideLabel,
  onChangeText,
  placeholder,
  type = "text",
  maxLenght = 12,
  ...props
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  if (type == TYPES.numericInput) {
    return (
      <View style={styles.container}>
        {topLabel && <Text style={styles.labelTop}>{topLabel}</Text>}

        <View style={styles.inputRow}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={COLORS.primary}
            keyboardType="numeric"
            autoCapitalize="none"
            maxLength={maxLenght}
            {...props}
          />

          {sideLabel && <Text style={styles.labelSide}>{sideLabel}</Text>}
        </View>
      </View>
    );
  }

  if (type == TYPES.dateInput) {
    return (
      <View style={styles.container}>
        {topLabel && <Text style={styles.labelTop}>{topLabel}</Text>}

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            autoCapitalize="none"
            maxLength={2}
            {...props}
          />

          {sideLabel && <Text style={styles.labelSide}>{sideLabel}</Text>}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginVertical: 20,
    alignItems: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    marginVertical: 12,
  },
  labelTop: {
    fontSize: 20,
    color: COLORS.primary,
    marginBottom: 15,
  },
  labelSide: {
    fontSize: 25,
    color: COLORS.primary,
    marginLeft: 5,
  },
});

export default OrbyFormInput;
