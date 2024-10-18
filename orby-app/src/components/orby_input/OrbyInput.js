import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { COLORS } from "../../assets/colors";

const OrbyInput = ({
  value,
  onChangeText,
  placeholder,
  type = "text",
  mask = null,
  keyboardType = "default",
  customStyle = {},
  ...props
}) => {
  const isPassword = type === "password";

  return (
    <View>
      {mask ? (
        <MaskedTextInput
          type={mask.type}
          options={mask.options}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, customStyle]}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
          {...props}
        />
      ) : (
        <TextInput
          style={[styles.input, customStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
          autoCapitalize="none"
          {...props}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.gray_background,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 12,
  },
});

export default OrbyInput;
