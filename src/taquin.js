import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, View } from "react-native";
import Title from "./title";
import TileGrid from "./tileGrid";
import PictureSelector from "./pictureSelector";
import Footer from "./footer";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Taquin() {
  const [minDimension, setMinDimension] = useState(100);
  const [imageUri, setImageUri] = useState(
    "https://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
  );
  const [tilesValues, setTilesValues] = useState(
    shuffleTaquin({ taquinList: [1, 2, 3, 4, 5, 6, 7, 8, 9] }),
  );
  const [originalTilesValues, setOriginalTilesValues] = useState(tilesValues);

  const saveScore = async (taquinList, score) => {
    await AsyncStorage.setItem(taquinList, score);
  };

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

    if (!result.canceled) {
      setImageUri(result["assets"][0]["uri"]);
    }
  };

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

  const onNewPress = async () => {
    setTilesValues(shuffleTaquin({ taquinList: [1, 2, 3, 4, 5, 6, 7, 8, 9] }));
    setOriginalTilesValues(tilesValues);
  };

  const onResetPress = async () => {
    setTilesValues(originalTilesValues);
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
        setOriginalTilesValues={setOriginalTilesValues}
        dimension={minDimension}
        sourcePicture={imageUri}
        shuffleTaquin={shuffleTaquin}
        saveScore={saveScore}
        originalTilesValues={originalTilesValues}
      />
      <PictureSelector onPress={pickImage} />
      <Footer onNewPress={onNewPress} onResetPress={onResetPress} />
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
