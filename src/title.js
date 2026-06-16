import { Text, StyleSheet, View } from "react-native";
import { Button } from "@react-navigation/elements";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mon Taquin</Text>
      <Button style={styles.button} color="#ffffff" screen="Informations">
        Informations
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff9864",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "500",
    alignSelf: "center",
  },
  button: {
    height: 50,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
  },
});
