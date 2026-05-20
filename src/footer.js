import { StyleSheet, View, Button } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Button title={"New"} />
      <Button title={"Reset"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 40,
  },
});
