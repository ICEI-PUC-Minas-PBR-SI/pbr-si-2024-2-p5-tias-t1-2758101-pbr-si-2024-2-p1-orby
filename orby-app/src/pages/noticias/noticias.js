import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './noticias.style';

export function Noticias(){
  return (
    <ScrollView style={styles.container}>
      {/* Logo do aplicativo */}
      <Image
        source={require("../../assets/orby_logo.png")} 
        style={styles.logo}
      />

      {/* Título da página */}
      <Text style={styles.header}>Notícias Recentes</Text>

      <View style={styles.card}>
      <Image
        source={require("../../assets/estoque_sangue.png")} 
        style={styles.sponsorImage1}
      />
        
      </View>

      <View style={styles.card}>
      <Image
        source={require("../../assets/noticias1.png")} 
        style={styles.sponsorImage}
      />
        <Text style={styles.sponsorTitle}>Hemocentro de Belo Horizonte recebe a quarta recertificação internacional  de qualidade dos serviços</Text>
        <Text style={styles.sponsorDescription}>
        “Tenho muito orgulho de dizer que a Hemominas tem o melhor sangue do Brasil. Além disso, pelas minhas viagens como presidente do Conselho Nacional de Secretários de Saúde...
        </Text>
      </View>

      <View style={styles.card}>
      <Image
        source={require("../../assets/noticias2.jpg")} 
        style={styles.sponsorImage}
      />
        <Text style={styles.sponsorTitle}>Hemominas faz grande participação no Congresso Brasileiro de Hematologia, Hemoterapia e Terapia Celular – Hemo 2024 </Text>
        <Text style={styles.sponsorDescription}>
        “Equipes de toda a Rede da Fundação Hemominas participaram, de 23 a 26 de outubro, do Congresso Brasileiro de Hematologia, Hemoterapia e Terapia Celular – Hemo 2024
        </Text>
      </View>
    </ScrollView>
  );
};

export default Noticias;
