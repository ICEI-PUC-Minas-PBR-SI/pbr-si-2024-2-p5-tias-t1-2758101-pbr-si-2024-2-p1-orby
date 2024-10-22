import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { signin } from "../../services/authService";
import OrbyInput from "../../components/orby_input/OrbyInput";
import OrbyButton from "../../components/orby-button/OrbyButton";
import styles from "./login.styles";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";
import { TextInputMask } from "react-native-masked-text";

export function Login({ navigation }) {
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Novo campo de confirmação
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }
    else{
        clearFields();}

    try {
      const userData = { cpf, password };
      await signin(userData);
      navigation.navigate("Home");
      clearFields(); // Limpa os campos após o login
    } catch (error) {
      Alert.alert("Erro", "Falha ao realizar login. Tente novamente.");
    }
  };

  const clearFields = () => {
    setCPF("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <View style={styles.container}>
      <OrbyLogo title="Login" />
        <View style={styles.TextInputMask}>
      <TextInputMask
        type={"cpf"}
        value={cpf}
        onChangeText={setCPF}
        placeholder="CPF"
        keyboardType="numeric"
        autoFocus
      />
      </View>

      <OrbyInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        type="password"
        maxLength={12} // Limite de caracteres
        autoFocus
      />

      <OrbyInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirmar Senha"
        type="password"
        maxLength={12} // Limite de caracteres
        autoFocus
      />



      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <View style={styles.checkbox}>
            {rememberMe && <FontAwesome name="check" size={14} color="white" />}
          </View>
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Lembrar-me</Text>
      </View>

      <OrbyButton onPress={handleLogin} title="Login" />

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <FontAwesome name="google" size={20} color="white" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFacebook}>
          <FontAwesome name="facebook" size={20} color="white" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("signup");
        }}
      >
        <Text style={styles.signUpText}>
          Não tem uma conta?{" "}
          <Text style={styles.signUpLink}>Cadastre-se aqui</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
