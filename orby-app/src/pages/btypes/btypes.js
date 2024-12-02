import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { COLORS } from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styles from './btypes.styles';

export function Btypes({ navigation }) {
    return (
        <ScrollView>
        <View style={styles.headerprincipal}>
          <Image
            source={require("../../assets/orby_logo.png")}
            style={styles.logoprincipal}
          />
          <Text style={styles.titleprincipal}>Tipos Sanguíneos</Text>
        </View>
        <View style={styles.container}>
            
          {/* Cabeçalho A+ */}
          <View style={styles.header}>
            <Text style={styles.headerText}>A +</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A+</Text>
              <Text style={styles.cellText}>A-</Text>
              <Text style={styles.cellText}>O+</Text>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A+</Text>
              <Text style={styles.cellText}>AB+</Text>
            </View>
          </View>
          {/* Cabeçalho B+ */}
          <View style={styles.header}>
            <Text style={styles.headerText}>B +</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>B+</Text>
              <Text style={styles.cellText}>B-</Text>
              <Text style={styles.cellText}>O+</Text>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>B+</Text>
              <Text style={styles.cellText}>AB+</Text>
            </View>
          </View>
            {/* Cabeçalho AB+*/}
          <View style={styles.header}>
            <Text style={styles.headerText}>AB +</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A+ B+</Text>
              <Text style={styles.cellText}>A- B-</Text>
              <Text style={styles.cellText}>O+ AB+</Text>
              <Text style={styles.cellText}>O- AB-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>AB+</Text>
            </View>
          </View>
          {/* Cabeçalho O+*/}
          <View style={styles.header}>
            <Text style={styles.headerText}>O +</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>O+</Text>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A+</Text>
              <Text style={styles.cellText}>AB+</Text>
              <Text style={styles.cellText}>B+</Text>
              <Text style={styles.cellText}>O+</Text>
            </View>
          </View>
          {/* Cabeçalho A-*/}
          <View style={styles.header}>
            <Text style={styles.headerText}>A -</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A-</Text>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A+</Text>
              <Text style={styles.cellText}>AB+</Text>
              <Text style={styles.cellText}>A-</Text>
              <Text style={styles.cellText}>AB-</Text>
            </View>
          </View>
          {/* Cabeçalho B-*/}
          <View style={styles.header}>
            <Text style={styles.headerText}>B -</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>B-</Text>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>B+</Text>
              <Text style={styles.cellText}>AB+</Text>
              <Text style={styles.cellText}>B-</Text>
              <Text style={styles.cellText}>AB-</Text>
            </View>
          </View>
          {/* Cabeçalho AB-*/}
          <View style={styles.header}>
            <Text style={styles.headerText}>AB -</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A-</Text>
              <Text style={styles.cellText}>B-</Text>
              <Text style={styles.cellText}>AB-</Text>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>AB-</Text>
              <Text style={styles.cellText}>AB+</Text>
            </View>
          </View>
          {/* Cabeçalho O-*/}
          <View style={styles.header}>
            <Text style={styles.headerText}>O -</Text>
          </View>    
          {/* Linhas da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>RECEBE DE</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>DOA PARA</Text>
            </View>
          </View>    
          {/* Conteúdo da tabela */}
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>O-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>A+ B+</Text>
              <Text style={styles.cellText}>A- B-</Text>
              <Text style={styles.cellText}>O+ AB+</Text>
              <Text style={styles.cellText}>O- AB-</Text>
            </View>
          </View>
        </View>
        </ScrollView>
        
      );
};
export default Btypes;