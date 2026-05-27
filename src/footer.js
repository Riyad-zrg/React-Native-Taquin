import { StyleSheet, View, Button } from "react-native";

export default function Footer({ onNewPress, onResetPress }) {
  return (
    <View style={styles.container}>
      <Button title={"New"} onPress={onNewPress} />
      <Button title={"Reset"} onPress={onResetPress} />
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
