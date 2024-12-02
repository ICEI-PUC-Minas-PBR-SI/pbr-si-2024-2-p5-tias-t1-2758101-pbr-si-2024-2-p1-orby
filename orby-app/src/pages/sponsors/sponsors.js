import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './sponsors.styles';

export function Sponsors(){
  return (
    <ScrollView style={styles.container}>
      {/* Logo do aplicativo */}
      <Image
        source={require("../../assets/orby_logo.png")} 
        style={styles.logo}
      />

      {/* Título da página */}
      <Text style={styles.header}>Patrocínios</Text>

      {/* Cartão Hemominas */}
      <View style={styles.card}>
      <Image
        source={require("../../assets/fundacao-hemominas-logo.png")} 
        style={styles.sponsorImage}
      />
        <Text style={styles.sponsorTitle}>FUNDAÇÃO HEMOMINAS</Text>
        <Text style={styles.sponsorDescription}>
          A Fundação Centro de Hematologia e Hemoterapia do Estado de Minas Gerais é a fundação responsável pela saúde relacionada à hematologia e à hemoterapia em Minas Gerais.
        </Text>
      </View>

      {/* Cartão PUC Minas */}
      <View style={styles.card}>
      <Image
        source={require("../../assets/pucminas_logo.png")} 
        style={styles.sponsorImage}
      />
        <Text style={styles.sponsorTitle}>PUC Minas</Text>
        <Text style={styles.sponsorDescription}>
          A Pontifícia Universidade Católica de Minas Gerais é uma instituição de ensino superior, privada e católica brasileira situada em Belo Horizonte, capital do estado de Minas Gerais.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Sponsors;
