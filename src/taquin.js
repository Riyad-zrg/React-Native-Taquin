import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./title";
import TileGrid from "./tileGrid";
import PictureSelector from "./pictureSelector";

export default function Taquin() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Title />
      <TileGrid />
      <PictureSelector />
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
