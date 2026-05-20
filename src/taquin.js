import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./title";

export default function Taquin() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Title />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
