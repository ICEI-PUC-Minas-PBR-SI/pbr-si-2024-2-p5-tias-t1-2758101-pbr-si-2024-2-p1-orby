import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { COLORS } from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styles from './aboutus.styles';

export function AboutUs({ navigation }) {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Image
        source={require("../../assets/orby_logo.png")} 
        style={styles.logo}
      />
      <Text style={styles.title}>Sobre nós</Text>
    </View>

    <Text style={styles.paragraph}>
      Bem-vindo ao Orby, uma iniciativa movida pela paixão por ajudar a salvar vidas. Somos um grupo de estudantes da
      PUC Minas que se uniu com um propósito comum: aumentar o número de doações de sangue e impactar positivamente
      nossas comunidades.
    </Text>

    <Text style={styles.paragraph}>
      Nossa história começou com a crença de que cada doação de sangue é uma dádiva que pode fazer a diferença na vida
      de alguém que enfrenta uma batalha de saúde. Percebemos que muitas pessoas desejam doar sangue, mas muitas vezes
      não têm conhecimento sobre as oportunidades ou se sentem desencorajadas pela falta de informações. É aqui que o
      Orby entra em cena, como uma plataforma inovadora que visa conectar doadores e centros de coleta de sangue de
      forma fácil e divertida.
    </Text>

    <Text style={styles.paragraph}>
      Com o Orby, nossa missão é tornar a doação de sangue uma experiência gratificante e envolvente. Queremos
      transformar o ato de doar sangue em uma competição saudável, onde os heróis anônimos que salvam vidas são
      reconhecidos por seu compromisso. Acreditamos que incentivar a doação de sangue é uma maneira significativa de
      fortalecer nossas comunidades e criar um mundo melhor.
    </Text>

    <Text style={styles.paragraph}>
      Nosso aplicativo oferece uma variedade de recursos, como rankings de doadores, atualizações em tempo real sobre
      eventos de doação de sangue e informações educacionais sobre a importância da doação de sangue. Também
      facilitamos a conexão entre doadores e centros de coleta de sangue para que você possa encontrar a oportunidade
      perfeita para fazer a diferença.
    </Text>

    <Text style={styles.paragraph}>
      A equipe do Orby é composta por indivíduos apaixonados e comprometidos que trabalham incansavelmente para
      tornar nossa visão realidade. Estamos ansiosos para fazer parceria com você, nossos usuários, centros de coleta
      de sangue e organizações beneficentes para criar um impacto positivo duradouro. Junte-se à nossa jornada de
      salvar vidas e fazer do mundo um lugar melhor. Seja parte da família Orby e faça a diferença hoje!
    </Text>

    <Text style={styles.paragraph}>
      Obrigado por escolher o Orby.{"\n\n"}Com gratidão e esperança,{"\n"}A Equipe Orby.
    </Text>
  </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outlined_button: {
    color: COLORS.primary,
    FontFace: "Jaldi_700Bold",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "right",
    marginEnd: 24,
  },
});
