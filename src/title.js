import { Text, StyleSheet, View } from "react-native";
import { Button } from "@react-navigation/elements";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mon Taquin</Text>
      <Button style={styles.button} screen="Informations">
        Information
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 30,
    color: "lightgray",
    fontWeight: "500",
    alignSelf: "center",
  },
  button: {
    height: 50,
    borderWidth: 2,
  },
});
