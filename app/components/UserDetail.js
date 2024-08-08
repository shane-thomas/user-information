import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const UserDetail = ({ label, value }) => (
  <View style={styles.detailContainer}>
    <Text style={styles.label}>{label}:</Text>
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "column",
    marginBottom: 10,
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: "rgb(88, 49, 1)",
  },
  container: {
    backgroundColor: "rgb(164, 113, 72)",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgb(255, 237, 216)",
  },
});
