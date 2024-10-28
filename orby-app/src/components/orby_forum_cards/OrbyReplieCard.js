import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";

const formatDateToBR = (isoDate) => {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const OrbyReplieCard = ({ text, date, creator }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.creator}>Por: {creator}</Text>
        <Text style={styles.date}>{formatDateToBR(date)}</Text>
      </View>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  creator: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#949494",
  },
});

export default OrbyReplieCard;
