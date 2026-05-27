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
  const [imageUri, setImageUri] = useState(
    "https://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
  );

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

  const [tilesValues, setTilesValues] = useState(
    shuffleTaquin({ taquinList: [1, 2, 3, 4, 5, 6, 7, 8, 9] }),
  );

  function shuffleTaquin({ taquinList }) {
    for (let i = 0; i < 50; i++) {
      const indexEmpty = taquinList.indexOf(9);
      const random = Math.random();
      if (random < 0.25 && taquinList[indexEmpty + 1] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty + 1];
        taquinList[indexEmpty + 1] = temp;
      } else if (random < 0.5 && taquinList[indexEmpty - 1] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty - 1];
        taquinList[indexEmpty - 1] = temp;
      } else if (random < 0.75 && taquinList[indexEmpty - 3] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty - 3];
        taquinList[indexEmpty - 3] = temp;
      } else if (random < 0.75 && taquinList[indexEmpty + 3] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty + 3];
        taquinList[indexEmpty + 3] = temp;
      }
    }
    return taquinList;
  }

  const onNewPress = () => {
    setTilesValues(shuffleTaquin({ taquinList: [1, 2, 3, 4, 5, 6, 7, 8, 9] }));
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
      <TileGrid
        tilesValues={tilesValues}
        setTilesValues={setTilesValues}
        dimension={minDimension}
        sourcePicture={imageUri}
        shuffleTaquin={shuffleTaquin}
      />
      <PictureSelector onPress={pickImage} />
      <Footer onNewPress={onNewPress} />
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
