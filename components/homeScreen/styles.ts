import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Un fondo oscuro para el horror
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
  },
  text: {
    color: "#e0e0e0",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  door: {
    width: 90,
    height: 200,
    marginTop: 20,
  },
});
