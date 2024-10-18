import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { signup } from "../../services/authService";
import { User } from "../../models/User";
import styles from "./signup.styles";
import OrbyInput from "../../components/orby_input/OrbyInput";
import OrbyButton from "../../components/orby-button/OrbyButton";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userData = new User(name, email, phoneNumber, password);
      await signup(userData);
      navigation.navigate("login");
    } catch (error) {
      Alert.alert("Erro", "Falha ao cadastrar usuário. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <OrbyLogo title="Cadastro" />

      <OrbyInput
        customStyle={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome completo"
        keyboardType="Text"
      />
      <OrbyInput
        customStyle={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <OrbyInput
        customStyle={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />
      <OrbyInput
        customStyle={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        type="password"
      />
      <OrbyInput
        customStyle={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Repita a senha"
        type="password"
      />

      <OrbyButton onPress={handleSignup} title="Cadastrar" />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={styles.footerText}>
          Não tem uma conta? <Text style={styles.link}>Entre aqui</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
