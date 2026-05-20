import { Text, StyleSheet, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mon Taquin</Text>
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
  },
  text: {
    fontSize: 30,
    color: "lightgray",
    fontWeight: "500",
    alignSelf: "center",
  },
});
