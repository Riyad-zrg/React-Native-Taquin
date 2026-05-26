import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./title";
import TileGrid from "./tileGrid";
import PictureSelector from "./pictureSelector";
import Footer from "./footer";
import { useState } from "react";

export default function Taquin() {
  const [minDimension, setMinDimension] = useState(100);
  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        setMinDimension(
          Math.min(
            event.nativeEvent.layout.height,
            event.nativeEvent.layout.width,
          ),
        );
      }}
    >
      <StatusBar style="light" />
      <Title />
      <TileGrid
        dimension={minDimension}
        sourcePicture={
          "https://www.freedigitalphotos.net/images/img/homepage/87357.jpg"
        }
      />
      <PictureSelector />
      <Footer />
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
