import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

export default function NetworkError() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgb(231, 188, 145)", "rgb(255, 237, 216)"]}
        style={styles.background}
      />
      <View style={styles.messageContainer}>
        <Text style={styles.errorMessage}>Network Error</Text>
        <Text style={styles.errorDescription}>
          Please check your internet connection and try again.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            nav.replace("index");
          }}
        >
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    backgroundColor: "rgb(244, 223, 200)",
  },
  background: {
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  messageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgb(255, 237, 216)",
    borderRadius: 10,
    shadowColor: "rgb(88, 49, 1)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  errorMessage: {
    fontSize: 40,
    fontWeight: "bold",
    color: "rgb(88, 49, 1)",
    marginBottom: 10,
  },
  errorDescription: {
    fontSize: 18,
    color: "rgb(88, 49, 1)",
  },
  button: {
    padding: 10,
    backgroundColor: "rgb(96, 56, 8)",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(248, 249, 250)",
  },
});
