import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../assets/colors";

const formatDateToBR = (isoDate) => {
  const date = new Date(isoDate);

  // Extrair componentes da data e formatá-los
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const OrbyTopicCard = ({
  title,
  description,
  date,
  creator,
  showDeleteOption,
  onDelete,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {showDeleteOption ? (
          <TouchableOpacity onPress={() => onDelete()}>
            <Icon name="trash" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.date}>Criado em: {formatDateToBR(date)}</Text>
        <Text style={styles.creator}>Por: {creator}</Text>
      </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#DDD",
    paddingTop: 8,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  creator: {
    fontSize: 12,
    color: "#999",
  },
});

export default OrbyTopicCard;
