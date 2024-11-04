import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TYPES } from "../orby-form-step/StepsTypes";
import { COLORS } from "../../../assets/colors";
import DateTimePicker from "@react-native-community/datetimepicker";

const OrbyFormInput = ({
  value,
  label,
  onChangeText,
  placeholder,
  type = "text",
  maxLenght = 12,
  ...props
}) => {
  const inputRef = useRef(null);

  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  const onChange = (event, date) => {
    setShowPicker(false); // Keep picker open on iOS after selection
    if (date) {
      setSelectedDate(date);
      const formattedDate = formatDate(date);
      onChangeText(formattedDate);
    }
  };

  const openDatePicker = () => {
    setShowPicker(true);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Formato brasileiro
  };

  if (type == TYPES.numericInput) {
    return (
      <View style={styles.container}>
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

          {label && <Text style={styles.labelSide}>{label}</Text>}
        </View>
      </View>
    );
  }

  if (type == TYPES.dateInput) {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.labelTop}>{label}</Text>}

        <TouchableOpacity onPress={openDatePicker} style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={selectedDate ? formatDate(selectedDate) : ""}
            onFocus={openDatePicker}
            placeholder={placeholder}
            placeholderTextColor={COLORS.primary}
            editable={false} // Prevent keyboard from opening
            {...props}
          />
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={selectedDate ? new Date(selectedDate) : new Date()}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
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
    fontSize: 18,
    textAlign: "center",
    color: "black",
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
