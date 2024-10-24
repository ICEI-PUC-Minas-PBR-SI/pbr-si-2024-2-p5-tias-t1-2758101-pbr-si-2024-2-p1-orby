import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { signin } from "../../services/authService";
import OrbyInput from "../../components/orby_input/OrbyInput";
import OrbyButton from "../../components/orby-button/OrbyButton";
import styles from "./login.styles";
import OrbyLogo from "../../components/orby_logo/OrbyLogo";
import { useAuth } from "../AuthContext";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { setIsLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      await signin(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Erro", "Falha ao realizar login. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <OrbyLogo title="Login" />

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

      <OrbyButton
        onPress={handleLogin}
        title="Login"
        customStyle={styles.button}
      />

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
