import { StatusBar } from "expo-status-bar";
import { COMMON_STYLES } from "../../assets/common_styles";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../assets/colors";
import OrbyInput from "../../components/orby_input/input";

export function Login({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/orby_logo.png")} />
        <Text style={COMMON_STYLES.boldHeadline}>Login</Text>
        <StatusBar style="auto" />
      </View>

      {/* Formulário de login */}

      <OrbyInput
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <OrbyInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        type="password"
      />

      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <View style={styles.checkbox}>
            {rememberMe && <FontAwesome name="check" size={14} color="white" />}
          </View>
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Lembrar-me</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Opções de login com Google/Facebook */}
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

      {/* Link para cadastro */}
      <TouchableOpacity>
        <Text style={styles.signUpText}>
          Não tem uma conta?{" "}
          <Text style={styles.signUpLink}>Cadastre-se aqui</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  logoIcon: {
    width: 30,
    height: 30,
    marginTop: -10,
  },
  input: {
    backgroundColor: COLORS.gray_background,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 16,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  rememberMeText: {
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#d32f2f",
    padding: 12,
    borderRadius: 25,
    marginTop: 24,
    marginBottom: 12,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  socialButtonGoogle: {
    flexDirection: "row",
    backgroundColor: "#db4437",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  socialButtonFacebook: {
    flexDirection: "row",
    backgroundColor: "#3b5998",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  socialButtonText: {
    color: "#fff",
    marginLeft: 10,
  },
  signUpText: {
    textAlign: "center",
    color: "#666",
  },
  signUpLink: {
    color: "#1e88e5",
  },
});
