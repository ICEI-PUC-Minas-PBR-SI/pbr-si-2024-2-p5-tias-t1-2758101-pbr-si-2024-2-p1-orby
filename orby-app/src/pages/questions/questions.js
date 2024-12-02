import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './questions.style';

export function Questions(){
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/orby_logo.png")} 
        style={styles.logo}
      />
      <Text style={styles.title}>Dúvidas</Text>
      <Text style={styles.subtitle}>Dúvidas frequentes</Text>

      {/* Lista de perguntas */}
      <ScrollView>
        <TouchableOpacity style={styles.questionCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>?</Text>
          </View>
          <Text style={styles.questionText}>Qual a idade mínima para doar?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>?</Text>
          </View>
          <Text style={styles.questionText}>Como faço para ganhar estrelas?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>?</Text>
          </View>
          <Text style={styles.questionText}>Quais doenças impedem de doar?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>?</Text>
          </View>
          <Text style={styles.questionText}>Posso doar quantas vezes por ano?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>?</Text>
          </View>
          <Text style={styles.questionText}>Como criar um tópico no fórum?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>?</Text>
          </View>
          <Text style={styles.questionText}>Como subir no ranking?</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botão flutuante */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Questions;
