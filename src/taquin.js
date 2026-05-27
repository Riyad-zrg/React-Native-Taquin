import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, View } from "react-native";
import Title from "./title";
import TileGrid from "./tileGrid";
import PictureSelector from "./pictureSelector";
import Footer from "./footer";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function Taquin() {
  const [minDimension, setMinDimension] = useState(100);
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      aspect: [4, 3],
      quality: 1,
    });

    console.log("iciiiii", { uri: result["assets"][0]["uri"] });

    setImageUri(result["assets"][0]["uri"]);
  };

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
      <TileGrid dimension={minDimension} sourcePicture={imageUri} />
      <PictureSelector onPress={pickImage} />
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
