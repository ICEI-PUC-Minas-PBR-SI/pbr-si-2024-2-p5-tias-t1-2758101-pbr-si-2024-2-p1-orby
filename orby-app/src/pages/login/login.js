import { StatusBar } from "expo-status-bar";
import { COMMON_STYLES } from "../../assets/common_styles";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import OrbyInput from "../../components/orby_input/OrbyInput";
import OrbyButton from "../../components/orby-button/OrbyButton";
import styles from "./login.styles";

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

      <OrbyButton onPress={handleLogin} title="Login" />

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
